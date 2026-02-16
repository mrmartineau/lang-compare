---
title: Packaging & Distribution
order: 23
---

Publish libraries to **PyPI**. Distribute apps as Docker containers, pip-installable packages, or standalone executables.

```toml
# pyproject.toml — modern package config
[build-system]
requires = ["hatchling"]
build-backend = "hatchling.build"

[project]
name = "my-package"
version = "1.0.0"
description = "My awesome library"
requires-python = ">=3.10"
dependencies = ["requests>=2.28"]

[project.scripts]
mycli = "my_package.cli:main"

[project.optional-dependencies]
dev = ["pytest", "ruff"]
```

```bash
# Build
python -m build  # Creates dist/*.whl and dist/*.tar.gz

# Publish to PyPI
pip install twine
twine upload dist/*

# Or use uv
uv build
uv publish

# Standalone executable
pip install pyinstaller
pyinstaller --onefile app.py
# Output: dist/app (single binary)

# Docker
FROM python:3.12-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
CMD ["python", "app.py"]
```

