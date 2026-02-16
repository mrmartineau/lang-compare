---
title: Package Management
order: 10
---

`pip` is the standard package manager. `uv` and `poetry` are modern alternatives.

```bash
# Install a package
pip install requests

# Install from requirements file
pip install -r requirements.txt

# Using uv (fast, modern)
uv pip install requests
uv add requests

# Using poetry
poetry add requests

# Virtual environments
python -m venv .venv
source .venv/bin/activate  # macOS/Linux
```

