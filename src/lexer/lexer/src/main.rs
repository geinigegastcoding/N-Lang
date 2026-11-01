#[derive(Debug)]
enum Token {
    Laat,
    Gelijk,
    KleinerGelijk,
    GelijkGelijk,
    GroterGelijk,

    Naam(String),
    Getal(i64),
    Zeg(String),
    Functie,
    Als,
    Voor,
    Tot,
    Einde,
    Plus,
    Min,
    Keer,
    HaakjeOpen,
    HaakjeDicht,
    DubbelePunt,
    Of,
    NieuweRegel,
    Inspring,
    Uitspring,
}
struct Plaats {
    regel: usize,
    kolom: usize,
}
#[derive(Debug)]
enum LexerError{
    UnexpectedCharacter(char),

}
fn main() {
    let source = "laat n = 3";

    match lex(source) {
        Ok(tokens) => println!("{tokens:#?}"),
        Err(error) => eprintln!("Lexer error: {error:?}"),
    }
}
fn is_operator(chars: char) -> bool{
    matches!(chars, '=' | '!'| '$' | '%' | '^' | '&' | '*' | '(' | ')' | '-' | '+' | '[' | ']' | '{' | '}' | '|' | ';' | ':' | '"' | '\'' | ',' | '<' | '.' | '>'| '?' | '/' )}
fn lex(source: &str) -> Result<Vec<Token>, LexerError> {
    let mut tokens: Vec<Token> = Vec::new();
    let mut chars = source.chars().peekable();
    let mut regel = 1;
    let mut kolom = 1;

    loop {
        if chars.peek() == None {
            return Ok(tokens)
        }
        if let Some(&c) = chars.peek() {
            if c == ' ' {
                chars.next();
                kolom += 1;
                continue
            }
            if c.is_alphabetic() {
                let mut naam = String::new();
                let token_regel = regel;
                let token_kolom = kolom;
                let mut letter = c;

                loop {
                    if chars.peek() == None {
                        break
                    }
                    if let Some(&x) = chars.peek() {
                        if x.is_alphabetic() || x.is_digit(10) || x == '_' {
                            letter = x;
                            naam.push(letter);
                            chars.next();
                        } else {
                            break
                        }
                    }
                    kolom += 1;
                }
                if naam == "laat" {
                    tokens.push(Token::Laat);
                }
                continue
            }
            if c.is_digit(10) {
            }
            if is_operator(c) {}

            chars.next();
            kolom += 1;
            }

        }
    }
