---
title: Build & Compile Model
order: 16
---

**Interpreted.** Ruby code is parsed into an AST, compiled to bytecode, and executed by YARV (Yet Another Ruby VM). JIT compilation available since Ruby 2.6.

```bash
# No compile step — run directly
ruby app.rb

# Ruby with JIT (YJIT — default since Ruby 3.3)
ruby --yjit app.rb

# Check if YJIT is enabled
ruby -e "puts RubyVM::YJIT.enabled?"

# MJIT (older JIT, deprecated in 3.3)
ruby --mjit app.rb

# Precompile to bytecode (for inspection)
ruby --dump=insns script.rb
```

**Execution model:**
- Source → Lexer → Parser → AST → YARV bytecode → VM execution
- **YJIT** (Ruby 3.1+): Lazy Basic Block Versioning JIT compiler, written in Rust
- **YJIT** is enabled by default in Ruby 3.3+ and gives 15-25% speedup for Rails apps
- **mruby**: Lightweight Ruby for embedded systems
- **TruffleRuby**: GraalVM-based implementation with aggressive JIT
- **JRuby**: Ruby on the JVM — true threads, Java interop

