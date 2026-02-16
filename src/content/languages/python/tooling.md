---
title: Tooling & Formatter/Linter
order: 15
---

Python has mature formatting and linting tools. Ruff is rapidly becoming the standard for both.

```bash
# Ruff — extremely fast linter + formatter (Rust-based)
pip install ruff
ruff check .          # Lint
ruff format .         # Format
ruff check --fix .    # Auto-fix

# Black — opinionated formatter
pip install black
black .

# isort — import sorting (built into Ruff)
pip install isort
isort .

# mypy — static type checker
pip install mypy
mypy src/

# pyright — fast type checker (Microsoft)
pip install pyright
pyright
```

```toml
# pyproject.toml
[tool.ruff]
line-length = 100
target-version = "py312"

[tool.ruff.lint]
select = ["E", "F", "I", "N", "UP", "B"]

[tool.mypy]
strict = true
```

