---
title: Build & Compile Model
order: 16
---

**Interpreted with bytecode compilation.** Python compiles source to bytecode (`.pyc`), then executes on the CPython VM.

```bash
# No explicit compile step — run directly
python3 app.py

# Bytecode is auto-cached in __pycache__/
# Force compile all files
python3 -m compileall src/

# PyInstaller — bundle into standalone executable
pip install pyinstaller
pyinstaller --onefile app.py
# Output: dist/app (single binary)

# Nuitka — compile to C, then native binary
pip install nuitka
nuitka --standalone app.py

# Cython — compile Python to C extension modules
cython module.pyx
```

**Execution model:**
- Source → Bytecode (.pyc) → CPython VM interpreter
- CPython has a GIL (Global Interpreter Lock) — one thread executes Python at a time
- Alternative runtimes: PyPy (JIT), GraalPy, Cython (AOT to C)
- Python 3.13+ has experimental free-threaded mode (no GIL)
- No static binary output by default — requires third-party tools

