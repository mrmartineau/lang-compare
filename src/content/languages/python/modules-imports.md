---
title: Modules & Imports
order: 8
---

Every `.py` file is a module. Directories with `__init__.py` are packages. Use `import` to bring in modules. Distribution is done via wheels/sdists uploaded to PyPI.

```python
# Import entire module
import os
import json

# Import specific names
from os.path import join, exists

# Import with alias
import numpy as np
from collections import defaultdict as dd

# Relative imports (within a package)
from . import sibling_module
from ..utils import helper

# Import everything (discouraged)
from math import *

# Dynamic import
import importlib
mod = importlib.import_module('my_module')

# Conditional import
try:
    import ujson as json
except ImportError:
    import json

# __init__.py controls package exports
# my_package/__init__.py:
# from .core import App
# from .utils import helper
# __all__ = ['App', 'helper']
```

