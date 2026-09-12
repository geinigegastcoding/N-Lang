export type Primitive = string | number | boolean;

type LiteralExpr = {
  kind: "literal";
  value: Primitive;
};

type IdentifierExpr = {
  kind: "identifier";
  name: string;
};

type BinaryExpr = {
  kind: "binary";
  left: Expression;
  operator: string;
  right: Expression;
};

export type Expression = LiteralExpr | IdentifierExpr | BinaryExpr;

type VariableStatement = {
  kind: "variable";
  name: string;
  value: Expression;
  line: number;
};

type AssignmentStatement = {
  kind: "assignment";
  name: string;
  value: Expression;
  line: number;
};

type PrintStatement = {
  kind: "print";
  value: Expression;
  line: number;
};

type IfStatement = {
  kind: "if";
  condition: Expression;
  thenBranch: Statement[];
  elseBranch: Statement[];
  line: number;
};

type WhileStatement = {
  kind: "while";
  condition: Expression;
  body: Statement[];
  line: number;
};

export type Statement =
  | VariableStatement
  | AssignmentStatement
  | PrintStatement
  | IfStatement
  | WhileStatement;

export type Program = {
  kind: "program";
  body: Statement[];
};

export type DisplayToken = {
  lexeme: string;
  type: "sleutelwoord" | "naam" | "waarde" | "operator" | "teken";
};

export type CompileResult =
  | {
      ok: true;
      java: string;
      ast: string;
      output: string[];
      tokens: DisplayToken[];
    }
  | {
      ok: false;
      message: string;
      line?: number;
      tokens: DisplayToken[];
    };

type ExpressionToken = {
  kind: "number" | "string" | "identifier" | "operator" | "left" | "right" | "eof";
  value: string;
};

class NLangError extends Error {
  line?: number;

  constructor(message: string, line?: number) {
    super(message);
    this.name = "NLangError";
    this.line = line;
  }
}

const TWO_CHAR_OPERATORS = [">=", "<=", "==", "!="];
const ONE_CHAR_OPERATORS = ["+", "-", "*", "/", ">", "<"];
const KEYWORDS = new Set(["laat", "stel", "toon", "als", "dan", "anders", "einde", "zolang", "waar", "onwaar"]);

const isLetter = (character: string) => /[\p{L}_]/u.test(character);
const isLetterOrNumber = (character: string) => /[\p{L}\p{N}_]/u.test(character);

function scanExpression(input: string, line: number): ExpressionToken[] {
  const tokens: ExpressionToken[] = [];
  let index = 0;

  while (index < input.length) {
    const character = input[index];

    if (/\s/u.test(character)) {
      index += 1;
      continue;
    }

    if (character === '"') {
      const start = index;
      index += 1;
      let escaped = false;

      while (index < input.length) {
        const current = input[index];
        if (current === '"' && !escaped) {
          index += 1;
          break;
        }
        escaped = current === "\\" && !escaped;
        if (current !== "\\") escaped = false;
        index += 1;
      }

      const raw = input.slice(start, index);
      if (!raw.endsWith('"')) {
        throw new NLangError("Deze tekst mist een afsluitend aanhalingsteken.", line);
      }
      tokens.push({ kind: "string", value: raw });
      continue;
    }

    if (/\d/u.test(character)) {
      const start = index;
      while (index < input.length && /[\d.]/u.test(input[index])) index += 1;
      const value = input.slice(start, index);
      if (!/^\d+(?:\.\d+)?$/u.test(value)) {
        throw new NLangError(`Het getal "${value}" is niet geldig.`, line);
      }
      tokens.push({ kind: "number", value });
      continue;
    }

    if (isLetter(character)) {
      const start = index;
      while (index < input.length && isLetterOrNumber(input[index])) index += 1;
      tokens.push({ kind: "identifier", value: input.slice(start, index) });
      continue;
    }

    const pair = input.slice(index, index + 2);
    if (TWO_CHAR_OPERATORS.includes(pair)) {
      tokens.push({ kind: "operator", value: pair });
      index += 2;
      continue;
    }

    if (ONE_CHAR_OPERATORS.includes(character)) {
      tokens.push({ kind: "operator", value: character });
      index += 1;
      continue;
    }

    if (character === "(") {
      tokens.push({ kind: "left", value: character });
      index += 1;
      continue;
    }

    if (character === ")") {
      tokens.push({ kind: "right", value: character });
      index += 1;
      continue;
    }

    throw new NLangError(`Ik herken het teken "${character}" niet.`, line);
  }

  tokens.push({ kind: "eof", value: "" });
  return tokens;
}

class ExpressionParser {
  private cursor = 0;

  constructor(
    private readonly tokens: ExpressionToken[],
    private readonly line: number,
  ) {}

  parse(): Expression {
    const expression = this.equality();
    if (this.peek().kind !== "eof") {
      throw new NLangError(`Onverwacht stukje "${this.peek().value}" in de berekening.`, this.line);
    }
    return expression;
  }

  private equality(): Expression {
    let expression = this.comparison();
    while (this.match("==", "!=")) {
      const operator = this.previous().value;
      expression = { kind: "binary", left: expression, operator, right: this.comparison() };
    }
    return expression;
  }

  private comparison(): Expression {
    let expression = this.term();
    while (this.match(">", ">=", "<", "<=")) {
      const operator = this.previous().value;
      expression = { kind: "binary", left: expression, operator, right: this.term() };
    }
    return expression;
  }

  private term(): Expression {
    let expression = this.factor();
    while (this.match("+", "-")) {
      const operator = this.previous().value;
      expression = { kind: "binary", left: expression, operator, right: this.factor() };
    }
    return expression;
  }

  private factor(): Expression {
    let expression = this.primary();
    while (this.match("*", "/")) {
      const operator = this.previous().value;
      expression = { kind: "binary", left: expression, operator, right: this.primary() };
    }
    return expression;
  }

  private primary(): Expression {
    const token = this.advance();

    if (token.kind === "number") {
      return { kind: "literal", value: Number(token.value) };
    }

    if (token.kind === "string") {
      try {
        return { kind: "literal", value: JSON.parse(token.value) as string };
      } catch {
        throw new NLangError("Deze tekst bevat een ongeldige escape.", this.line);
      }
    }

    if (token.kind === "identifier") {
      if (token.value === "waar") return { kind: "literal", value: true };
      if (token.value === "onwaar") return { kind: "literal", value: false };
      return { kind: "identifier", name: token.value };
    }

    if (token.kind === "left") {
      const expression = this.equality();
      if (this.advance().kind !== "right") {
        throw new NLangError("Deze berekening mist een sluitend haakje.", this.line);
      }
      return expression;
    }

    throw new NLangError("Hier verwacht N-Lang een waarde of variabelenaam.", this.line);
  }

  private match(...operators: string[]): boolean {
    if (this.peek().kind !== "operator" || !operators.includes(this.peek().value)) return false;
    this.cursor += 1;
    return true;
  }

  private advance(): ExpressionToken {
    const token = this.tokens[this.cursor];
    if (token.kind !== "eof") this.cursor += 1;
    return token;
  }

  private peek(): ExpressionToken {
    return this.tokens[this.cursor];
  }

  private previous(): ExpressionToken {
    return this.tokens[this.cursor - 1];
  }
}

function parseExpression(input: string, line: number): Expression {
  return new ExpressionParser(scanExpression(input, line), line).parse();
}

type SourceLine = { text: string; line: number };

function sourceLines(source: string): SourceLine[] {
  return source.split(/\r?\n/u).map((text, index) => ({ text: text.trim(), line: index + 1 }));
}

function parseBlock(
  lines: SourceLine[],
  start: number,
  stoppers: Set<string>,
): { statements: Statement[]; cursor: number } {
  const statements: Statement[] = [];
  let cursor = start;

  while (cursor < lines.length) {
    const current = lines[cursor];
    const text = current.text;

    if (!text || text.startsWith("#")) {
      cursor += 1;
      continue;
    }

    if (stoppers.has(text)) return { statements, cursor };
    if (text === "anders" || text === "einde") {
      throw new NLangError(`"${text}" staat hier zonder bijpassend blok.`, current.line);
    }

    const variable = text.match(/^laat\s+([\p{L}_][\p{L}\p{N}_]*)\s*=\s*(.+)$/u);
    if (variable) {
      statements.push({
        kind: "variable",
        name: variable[1],
        value: parseExpression(variable[2], current.line),
        line: current.line,
      });
      cursor += 1;
      continue;
    }

    const assignment = text.match(/^stel\s+([\p{L}_][\p{L}\p{N}_]*)\s*=\s*(.+)$/u);
    if (assignment) {
      statements.push({
        kind: "assignment",
        name: assignment[1],
        value: parseExpression(assignment[2], current.line),
        line: current.line,
      });
      cursor += 1;
      continue;
    }

    const print = text.match(/^toon\s+(.+)$/u);
    if (print) {
      statements.push({ kind: "print", value: parseExpression(print[1], current.line), line: current.line });
      cursor += 1;
      continue;
    }

    const condition = text.match(/^als\s+(.+)\s+dan$/u);
    if (condition) {
      const thenResult = parseBlock(lines, cursor + 1, new Set(["anders", "einde"]));
      let elseBranch: Statement[] = [];
      let endCursor = thenResult.cursor;

      if (lines[endCursor]?.text === "anders") {
        const elseResult = parseBlock(lines, endCursor + 1, new Set(["einde"]));
        elseBranch = elseResult.statements;
        endCursor = elseResult.cursor;
      }

      if (lines[endCursor]?.text !== "einde") {
        throw new NLangError("Dit als-blok mist het woord einde.", current.line);
      }

      statements.push({
        kind: "if",
        condition: parseExpression(condition[1], current.line),
        thenBranch: thenResult.statements,
        elseBranch,
        line: current.line,
      });
      cursor = endCursor + 1;
      continue;
    }

    const loop = text.match(/^zolang\s+(.+)\s+dan$/u);
    if (loop) {
      const bodyResult = parseBlock(lines, cursor + 1, new Set(["einde"]));
      if (lines[bodyResult.cursor]?.text !== "einde") {
        throw new NLangError("Deze zolang-lus mist het woord einde.", current.line);
      }
      statements.push({
        kind: "while",
        condition: parseExpression(loop[1], current.line),
        body: bodyResult.statements,
        line: current.line,
      });
      cursor = bodyResult.cursor + 1;
      continue;
    }

    throw new NLangError(`Ik begrijp "${text}" nog niet.`, current.line);
  }

  return { statements, cursor };
}

function parseProgram(source: string): Program {
  const lines = sourceLines(source);
  const result = parseBlock(lines, 0, new Set());
  return { kind: "program", body: result.statements };
}

function expressionToJava(expression: Expression): string {
  if (expression.kind === "literal") {
    if (typeof expression.value === "string") return JSON.stringify(expression.value);
    return String(expression.value);
  }
  if (expression.kind === "identifier") return expression.name;
  return `(${expressionToJava(expression.left)} ${expression.operator} ${expressionToJava(expression.right)})`;
}

function inferJavaType(expression: Expression, types: Map<string, string>): string {
  if (expression.kind === "literal") {
    if (typeof expression.value === "string") return "String";
    if (typeof expression.value === "boolean") return "boolean";
    return Number.isInteger(expression.value) ? "int" : "double";
  }
  if (expression.kind === "identifier") return types.get(expression.name) ?? "var";
  if ([">", ">=", "<", "<=", "==", "!="].includes(expression.operator)) return "boolean";
  const left = inferJavaType(expression.left, types);
  const right = inferJavaType(expression.right, types);
  if (expression.operator === "+" && (left === "String" || right === "String")) return "String";
  if (left === "double" || right === "double") return "double";
  return "int";
}

function statementsToJava(
  statements: Statement[],
  depth: number,
  types: Map<string, string>,
): string[] {
  const indent = "    ".repeat(depth);
  const lines: string[] = [];

  for (const statement of statements) {
    if (statement.kind === "variable") {
      const type = inferJavaType(statement.value, types);
      types.set(statement.name, type);
      lines.push(`${indent}${type} ${statement.name} = ${expressionToJava(statement.value)};`);
    } else if (statement.kind === "assignment") {
      lines.push(`${indent}${statement.name} = ${expressionToJava(statement.value)};`);
    } else if (statement.kind === "print") {
      lines.push(`${indent}System.out.println(${expressionToJava(statement.value)});`);
    } else if (statement.kind === "if") {
      lines.push(`${indent}if (${expressionToJava(statement.condition)}) {`);
      lines.push(...statementsToJava(statement.thenBranch, depth + 1, types));
      if (statement.elseBranch.length > 0) {
        lines.push(`${indent}} else {`);
        lines.push(...statementsToJava(statement.elseBranch, depth + 1, types));
      }
      lines.push(`${indent}}`);
    } else {
      lines.push(`${indent}while (${expressionToJava(statement.condition)}) {`);
      lines.push(...statementsToJava(statement.body, depth + 1, types));
      lines.push(`${indent}}`);
    }
  }

  return lines;
}

function programToJava(program: Program): string {
  const types = new Map<string, string>();
  return [
    "public class Programma {",
    "    public static void main(String[] args) {",
    ...statementsToJava(program.body, 2, types),
    "    }",
    "}",
  ].join("\n");
}

function evaluate(expression: Expression, environment: Map<string, Primitive>, line: number): Primitive {
  if (expression.kind === "literal") return expression.value;
  if (expression.kind === "identifier") {
    if (!environment.has(expression.name)) {
      throw new NLangError(`De variabele "${expression.name}" bestaat nog niet.`, line);
    }
    return environment.get(expression.name)!;
  }

  const left = evaluate(expression.left, environment, line);
  const right = evaluate(expression.right, environment, line);

  switch (expression.operator) {
    case "+":
      if (typeof left === "string" || typeof right === "string") return String(left) + String(right);
      return Number(left) + Number(right);
    case "-":
      return Number(left) - Number(right);
    case "*":
      return Number(left) * Number(right);
    case "/":
      if (Number(right) === 0) throw new NLangError("Delen door nul kan niet.", line);
      return Number(left) / Number(right);
    case ">":
      return left > right;
    case ">=":
      return left >= right;
    case "<":
      return left < right;
    case "<=":
      return left <= right;
    case "==":
      return left === right;
    case "!=":
      return left !== right;
    default:
      throw new NLangError(`Operator "${expression.operator}" is niet ondersteund.`, line);
  }
}

function executeStatements(
  statements: Statement[],
  environment: Map<string, Primitive>,
  output: string[],
): void {
  for (const statement of statements) {
    if (statement.kind === "variable") {
      environment.set(statement.name, evaluate(statement.value, environment, statement.line));
    } else if (statement.kind === "assignment") {
      if (!environment.has(statement.name)) {
        throw new NLangError(`Je kunt "${statement.name}" pas instellen nadat je hem met laat hebt gemaakt.`, statement.line);
      }
      environment.set(statement.name, evaluate(statement.value, environment, statement.line));
    } else if (statement.kind === "print") {
      output.push(String(evaluate(statement.value, environment, statement.line)));
    } else if (statement.kind === "if") {
      const branch = Boolean(evaluate(statement.condition, environment, statement.line))
        ? statement.thenBranch
        : statement.elseBranch;
      executeStatements(branch, environment, output);
    } else {
      let repetitions = 0;
      while (Boolean(evaluate(statement.condition, environment, statement.line))) {
        executeStatements(statement.body, environment, output);
        repetitions += 1;
        if (repetitions > 100) {
          throw new NLangError("Deze lus blijft doorgaan. Pas de conditie of teller aan.", statement.line);
        }
      }
    }
  }
}

type TreeNode = { label: string; children?: TreeNode[] };

function expressionTree(expression: Expression): TreeNode {
  if (expression.kind === "literal") {
    const value = typeof expression.value === "string" ? `"${expression.value}"` : String(expression.value);
    return { label: `Waarde ${value}` };
  }
  if (expression.kind === "identifier") return { label: `Variabele ${expression.name}` };
  return {
    label: `Bewerking ${expression.operator}`,
    children: [expressionTree(expression.left), expressionTree(expression.right)],
  };
}

function statementTree(statement: Statement): TreeNode {
  if (statement.kind === "variable") {
    return { label: `Maak ${statement.name}`, children: [expressionTree(statement.value)] };
  }
  if (statement.kind === "assignment") {
    return { label: `Stel ${statement.name} in`, children: [expressionTree(statement.value)] };
  }
  if (statement.kind === "print") return { label: "Toon", children: [expressionTree(statement.value)] };
  if (statement.kind === "if") {
    const children: TreeNode[] = [
      { label: "Conditie", children: [expressionTree(statement.condition)] },
      { label: "Dan", children: statement.thenBranch.map(statementTree) },
    ];
    if (statement.elseBranch.length > 0) {
      children.push({ label: "Anders", children: statement.elseBranch.map(statementTree) });
    }
    return { label: "Als", children };
  }
  return {
    label: "Zolang",
    children: [
      { label: "Conditie", children: [expressionTree(statement.condition)] },
      { label: "Herhaal", children: statement.body.map(statementTree) },
    ],
  };
}

function renderTree(node: TreeNode, prefix = "", isLast = true, isRoot = true): string[] {
  const line = isRoot ? node.label : `${prefix}${isLast ? "└─" : "├─"} ${node.label}`;
  const lines = [line];
  const children = node.children ?? [];
  const nextPrefix = isRoot ? "" : `${prefix}${isLast ? "   " : "│  "}`;
  children.forEach((child, index) => {
    lines.push(...renderTree(child, nextPrefix, index === children.length - 1, false));
  });
  return lines;
}

function programToAst(program: Program): string {
  return renderTree({ label: "Programma", children: program.body.map(statementTree) }).join("\n");
}

export function lexSource(source: string): DisplayToken[] {
  const pattern = /"(?:\\.|[^"\\])*"|>=|<=|==|!=|[+\-*/<>=()]|[\p{L}_][\p{L}\p{N}_]*|\d+(?:\.\d+)?/gu;
  return Array.from(source.matchAll(pattern), (match) => {
    const lexeme = match[0];
    if (KEYWORDS.has(lexeme)) return { lexeme, type: "sleutelwoord" as const };
    if (/^"/u.test(lexeme) || /^\d/u.test(lexeme)) return { lexeme, type: "waarde" as const };
    if (/^(?:>=|<=|==|!=|[+\-*/<>=])$/u.test(lexeme)) return { lexeme, type: "operator" as const };
    if (/^[()]$/u.test(lexeme)) return { lexeme, type: "teken" as const };
    return { lexeme, type: "naam" as const };
  });
}

export function compileNLang(source: string): CompileResult {
  const tokens = lexSource(source);
  if (!source.trim()) {
    return { ok: false, message: "Schrijf eerst een regel N-Lang om te beginnen.", tokens };
  }

  try {
    const program = parseProgram(source);
    const output: string[] = [];
    executeStatements(program.body, new Map(), output);
    return {
      ok: true,
      java: programToJava(program),
      ast: programToAst(program),
      output,
      tokens,
    };
  } catch (error) {
    if (error instanceof NLangError) {
      return { ok: false, message: error.message, line: error.line, tokens };
    }
    return { ok: false, message: "Er ging iets onverwachts mis tijdens het vertalen.", tokens };
  }
}

export const examples = [
  {
    name: "Begroeting",
    source: `laat naam = "wereld"
toon "Hallo " + naam`,
  },
  {
    name: "Keuze",
    source: `laat leeftijd = 15

als leeftijd < 18 dan
  toon "Je bent nog geen 18"
anders
  toon "Je bent 18 of ouder"
einde`,
  },
  {
    name: "Herhalen",
    source: `laat teller = 1

zolang teller <= 3 dan
  toon "Ronde " + teller
  stel teller = teller + 1
einde`,
  },
] as const;
