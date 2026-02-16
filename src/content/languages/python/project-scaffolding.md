---
title: Project Scaffolding
order: 11
---

Create a virtual environment and a `pyproject.toml` or `requirements.txt`.

```bash
# Basic project with venv
mkdir my-project && cd my-project
python -m venv .venv
source .venv/bin/activate

# Using uv (recommended)
uv init my-project
cd my-project
uv run python main.py

# Using poetry
poetry new my-project
cd my-project
poetry install

# Django web project
pip install django
django-admin startproject mysite

# FastAPI project
pip install "fastapi[standard]"
```

