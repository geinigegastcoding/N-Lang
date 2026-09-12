import { useEffect, useMemo, useRef, useState } from "react";
import {
  BracketsCurly,
  Check,
  Copy,
  FileCode,
  Play,
  TerminalWindow,
  TreeStructure,
  WarningCircle,
} from "@phosphor-icons/react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { compileNLang, examples, type CompileResult } from "../compiler/nlang";

type ResultTab = "uitvoer" | "ast" | "java" | "tokens";

const resultTabs = [
  { id: "uitvoer" as const, label: "Uitvoer", icon: TerminalWindow },
  { id: "ast" as const, label: "AST", icon: TreeStructure },
  { id: "java" as const, label: "Java", icon: FileCode },
  { id: "tokens" as const, label: "Tokens", icon: BracketsCurly },
];

function ResultContent({ result, tab }: { result: CompileResult; tab: ResultTab }) {
  if (!result.ok) {
    return (
      <div className="lab-error" role="alert">
        <WarningCircle size={24} weight="fill" aria-hidden="true" />
        <div>
          <strong>{result.line ? `Regel ${result.line}` : "Nog geen code"}</strong>
          <p>{result.message}</p>
        </div>
      </div>
    );
  }

  if (tab === "uitvoer") {
    return result.output.length > 0 ? (
      <div className="terminal-output" aria-label="Uitvoer van het programma">
        {result.output.map((line, index) => (
          <p key={`${line}-${index}`}>
            <span aria-hidden="true">›</span> {line}
          </p>
        ))}
      </div>
    ) : (
      <div className="lab-empty">
        <TerminalWindow size={28} aria-hidden="true" />
        <p>Dit programma draait goed, maar toont nog niets.</p>
      </div>
    );
  }

  if (tab === "ast") {
    return <pre className="result-code result-code--tree">{result.ast}</pre>;
  }

  if (tab === "java") {
    return <pre className="result-code">{result.java}</pre>;
  }

  return (
    <div className="token-ribbon" aria-label="Tokens uit de broncode">
      {result.tokens.map((token, index) => (
        <span className={`token token--${token.type}`} key={`${token.lexeme}-${index}`}>
          {token.lexeme}
        </span>
      ))}
    </div>
  );
}

export function CompilerLab() {
  const reduceMotion = useReducedMotion();
  const [source, setSource] = useState<string>(examples[1].source);
  const [result, setResult] = useState<CompileResult>(() => compileNLang(examples[1].source));
  const [activeTab, setActiveTab] = useState<ResultTab>("uitvoer");
  const [isRunning, setIsRunning] = useState(false);
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<number | undefined>(undefined);
  const copyTimerRef = useRef<number | undefined>(undefined);

  const lineCount = useMemo(() => Math.max(source.split(/\r?\n/u).length, 1), [source]);

  useEffect(
    () => () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
      if (copyTimerRef.current) window.clearTimeout(copyTimerRef.current);
    },
    [],
  );

  const run = () => {
    if (!source.trim()) {
      setResult(compileNLang(source));
      setActiveTab("uitvoer");
      return;
    }

    setIsRunning(true);
    if (timerRef.current) window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(
      () => {
        setResult(compileNLang(source));
        setActiveTab("uitvoer");
        setIsRunning(false);
      },
      reduceMotion ? 0 : 220,
    );
  };

  const chooseExample = (exampleSource: string) => {
    setSource(exampleSource);
    setResult(compileNLang(exampleSource));
    setActiveTab("uitvoer");
  };

  const copyJava = async () => {
    if (!result.ok) return;
    await navigator.clipboard.writeText(result.java);
    setCopied(true);
    if (copyTimerRef.current) window.clearTimeout(copyTimerRef.current);
    copyTimerRef.current = window.setTimeout(() => setCopied(false), 1600);
  };

  return (
    <section className="compiler-lab" id="lab" aria-label="Interactieve N-Lang compiler">
      <div className="lab-topbar">
        <div className="lab-file">
          <span className="lab-file__mark" aria-hidden="true">
            N
          </span>
          <span>speelplaats.nlang</span>
        </div>
        <button
          className="run-button"
          type="button"
          onClick={run}
          disabled={isRunning || !source.trim()}
          aria-busy={isRunning}
        >
          <Play size={16} weight="fill" aria-hidden="true" />
          {isRunning ? "Vertalen" : "Voer uit"}
        </button>
      </div>

      <div className="lab-progress" data-running={isRunning} aria-hidden="true">
        <motion.span
          animate={isRunning && !reduceMotion ? { scaleX: [0.05, 0.7, 1] } : { scaleX: isRunning ? 1 : 0 }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>

      <div className="example-switcher" aria-label="Voorbeeldprogramma's">
        {examples.map((example) => (
          <button
            type="button"
            key={example.name}
            aria-pressed={source === example.source}
            onClick={() => chooseExample(example.source)}
          >
            {example.name}
          </button>
        ))}
      </div>

      <div className="lab-workspace">
        <div className="source-pane">
          <div className="pane-heading">
            <span>Jouw N-Lang</span>
            <span>{lineCount} {lineCount === 1 ? "regel" : "regels"}</span>
          </div>
          <label className="sr-only" htmlFor="code-input">
            Schrijf N-Lang code
          </label>
          <textarea
            id="code-input"
            value={source}
            onChange={(event) => setSource(event.target.value)}
            onKeyDown={(event) => {
              if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
                event.preventDefault();
                run();
              }
            }}
            spellCheck={false}
            maxLength={1200}
            aria-describedby="code-tip"
          />
          <p id="code-tip" className="code-tip">
            Ctrl + Enter voert je code uit
          </p>
        </div>

        <div className="result-pane" aria-live="polite">
          <div className="result-tabs" role="tablist" aria-label="Vertaalresultaat">
            {resultTabs.map(({ id, label, icon: Icon }) => (
              <button
                type="button"
                role="tab"
                key={id}
                aria-label={label}
                aria-selected={activeTab === id}
                aria-controls="result-panel"
                onClick={() => setActiveTab(id)}
              >
                <Icon size={15} aria-hidden="true" />
                <span>{label}</span>
              </button>
            ))}
            {activeTab === "java" && result.ok ? (
              <button className="copy-button" type="button" onClick={copyJava} aria-label="Kopieer Java-code">
                {copied ? <Check size={15} weight="bold" aria-hidden="true" /> : <Copy size={15} aria-hidden="true" />}
              </button>
            ) : null}
          </div>
          <div className="result-content" id="result-panel" role="tabpanel">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                className="result-content__inner"
                key={`${activeTab}-${result.ok ? "ok" : "error"}`}
                initial={reduceMotion ? false : { opacity: 0.55, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0.55, y: -4 }}
                transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
              >
                <ResultContent result={result} tab={activeTab} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="compiler-route" aria-label="Route door de compiler">
        {[
          ["Bron", FileCode],
          ["Tokens", BracketsCurly],
          ["AST", TreeStructure],
          ["Java", TerminalWindow],
        ].map(([label, Icon], index) => (
          <div className="route-stop" key={String(label)}>
            <span>
              <Icon size={16} weight="bold" aria-hidden="true" />
              {String(label)}
            </span>
            {index < 3 ? <i aria-hidden="true" /> : null}
          </div>
        ))}
      </div>
    </section>
  );
}
