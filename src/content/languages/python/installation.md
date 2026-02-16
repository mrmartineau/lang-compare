---
title: Installation & Getting Started
order: 12
---

Python comes pre-installed on macOS and most Linux distros. Use `pyenv` or the official installer for version management.

```bash
# macOS (Homebrew)
brew install python

# Using pyenv (recommended for version management)
brew install pyenv
pyenv install 3.12
pyenv global 3.12

# Using uv (fast Python version management)
uv python install 3.12
uv python pin 3.12

# Verify installation
python3 --version
```

```bash
# REPL — Python has an excellent built-in REPL
python3             # Standard REPL
python3 -i script.py  # Run script then drop into REPL

# IPython — enhanced REPL with autocomplete, syntax highlighting
pip install ipython
ipython

# Jupyter — interactive notebooks
pip install jupyter
jupyter notebook

# Run a script
python3 script.py

# Quick one-liner
python3 -c "print('Hello!')"
```

