---
title: Rust-target voor WebAssembly in de browser
created: 2026-09-18
updated: 2026-09-18
type: source
status: active
tags: [pws, rust, webassembly, platform]
sources: [https://doc.rust-lang.org/rustc/platform-support/wasm32-unknown-unknown.html]
---

# Rust-target voor WebAssembly in de browser

- **Referentie:** Rust-project. (z.d.). *wasm32-unknown-unknown*. The rustc book. [Targetdocumentatie](https://doc.rust-lang.org/rustc/platform-support/wasm32-unknown-unknown.html).
- **Geraadpleegd:** 2026-09-18; levende targetdocumentatie.
- **Secties:** inleiding; Requirements; Building Rust programs.
- **Geverifieerd:** dit target kan Rust voor Wasm bouwen; OS-gerichte delen van `std` zijn beperkt. De pagina geeft het `rustup target add`-commando.
- **Afgeleid advies:** relevant wanneer eigen Rust-runtimehelpers naar Wasm worden gebouwd; dit is aanvullend aan de directe N-Lang-Wasm-backend, geen vervanging ervan.
- **Gebruik:** [WebAssembly-opzet](../../ontwikkeling/webassembly.md).
- **Kwaliteit:** primaire Rust-platforminformatie, actueel bij raadpleging en direct relevant. Bewijst geen werking van onze toekomstige code of ondersteuning in iedere browser.
