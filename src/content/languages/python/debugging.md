---
title: Debugging
order: 24
---

Built-in **pdb** debugger, enhanced **ipdb/pudb**, and VS Code/PyCharm GUI debuggers.

```python
# pdb — built-in debugger
import pdb; pdb.set_trace()  # Breakpoint

# Python 3.7+ — built-in breakpoint()
breakpoint()  # Drops into pdb (or configured debugger)

# pdb commands:
# n (next), s (step into), c (continue)
# p expr (print), pp expr (pretty print)
# l (list source), w (where/stack trace)
# b 42 (breakpoint at line 42)
# q (quit)
```

```bash
# Run with debugger
python -m pdb script.py

# ipdb — IPython-enhanced debugger
pip install ipdb
import ipdb; ipdb.set_trace()

# pudb — full-screen TUI debugger
pip install pudb
python -m pudb script.py

# VS Code debugging
# launch.json:
{
  "type": "debugpy",
  "request": "launch",
  "program": "${file}",
  "console": "integratedTerminal"
}
# Click gutter for breakpoints, F5 to start

# PyCharm — built-in debugger
# Click gutter, Shift+F9 to debug

# Logging (prefer over print)
import logging
logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)
logger.debug("Processing %d items", len(items))
logger.error("Failed to connect", exc_info=True)

# Rich — beautiful tracebacks
pip install rich
from rich.traceback import install
install(show_locals=True)
```

