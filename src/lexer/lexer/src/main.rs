#[derive(Debug)]
enum Token {
    Laat,
    Gelijk,
    Kleiner,
    Groter,
    Percentage,
    Dakje,


    Naam(String),
    Getal(i64),
    Zeg,
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
    Niet,
    Comment,
    Slash,
    VierkantHaakjeOpen,
    VierkantHaakjeDicht,

}
struct Plaats {
    regel: usize,
}
#[derive(Debug)]
enum LexerError{
    UnexpectedCharacter(char),

}
use std::io::{self, Write};
fn main() {
    println!("N-Lang Lexer");
    println!("Plak je code en typ :run om te lexen.\n");

    let mut source = String::new();

    loop {
        let mut line = String::new();

        io::stdout().flush().unwrap();
        let bytes = io::stdin().read_line(&mut line).unwrap();

        if bytes == 0 || line.trim() == ":run" {
            break;
        }

        source.push_str(&line);
    }

    match lex(&source) {
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

                let token = match naam.as_str() {
                    "als" => Token::Als,
                    "voor" => Token::Voor,
                    "laat" => Token::Laat,
                    "functie" => Token::Functie,
                    "tot" => Token::Tot,
                    "einde" => Token::Einde,
                    "of" => Token::Of,
                    "zeg" => Token::Zeg,
                    _ => Token::Naam(naam),
                };
                tokens.push(token);

                continue
            }
            if c.is_digit(10) {
                let mut getal_string = String::new();
                let mut is_getal = true;
                loop {
                    if chars.peek() == None {
                        if is_getal == true {
                            let getal = getal_string.parse::<i64>().unwrap();
                            tokens.push(Token::Getal(getal));
                        }
                        else {
                            tokens.push(Token::Naam(getal_string));

                        }
                        return Ok(tokens);
                    }
                    if let Some(&z) = chars.peek() {
                        if z.is_digit(10) {
                            getal_string.push(z);
                            chars.next();
                        } else if z.is_alphabetic() {
                            is_getal = false;
                            getal_string.push(z);
                            chars.next();
                        } else {
                            break
                        }
                    }
                }

                if is_getal == true {
                    let getal = getal_string.parse::<i64>().unwrap();
                    tokens.push(Token::Getal(getal));
                }
                else {
                    tokens.push(Token::Naam(getal_string));

                }
                continue
            }


            if is_operator(c) {
                let token = match c {
                    '=' => Token::Gelijk,
                    '!' => Token::Niet,
                    '#' => Token::Comment,
                    '%' => Token::Percentage,
                    '^' => Token::Dakje,
                    '*' => Token::Keer,
                    '(' => Token::HaakjeOpen,
                    ')' => Token::HaakjeDicht,
                    '-' => Token::Min,
                    '_' => return Err(LexerError::UnexpectedCharacter(c)),
                    '+' => Token::Plus,
                    ':' => Token::DubbelePunt,
                    '/' => Token::Slash,
                    '[' => Token::VierkantHaakjeOpen,
                    ']' => Token::VierkantHaakjeDicht,
                    '<' => Token::Kleiner,
                    '>' => Token::Groter,
                    _ => return Err(LexerError::UnexpectedCharacter(c)),


                };
                tokens.push(token)
            }

            chars.next();
            kolom += 1;
            }

        }
    }
