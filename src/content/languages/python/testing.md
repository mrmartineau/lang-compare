---
title: Testing
order: 13
---

`pytest` is the de facto standard. Python also includes `unittest` in the standard library. `hypothesis` provides property-based testing.

```python
# pytest (recommended)
def test_addition():
    assert 1 + 2 == 3

def test_list_contains():
    assert 2 in [1, 2, 3]

# Fixtures for setup/teardown
import pytest

@pytest.fixture
def sample_list():
    return [1, 2, 3]

def test_length(sample_list):
    assert len(sample_list) == 3

# Parametrize — run test with multiple inputs
@pytest.mark.parametrize("a,b,expected", [
    (1, 2, 3),
    (0, 0, 0),
    (-1, 1, 0),
])
def test_add(a, b, expected):
    assert a + b == expected
```

```python
# unittest (standard library)
import unittest

class TestMath(unittest.TestCase):
    def test_add(self):
        self.assertEqual(1 + 2, 3)
```

```bash
# Run tests
pytest                  # pytest (auto-discovers tests)
pytest -v               # Verbose output
pytest --cov=mypackage  # With coverage
python -m unittest      # Standard library
```

