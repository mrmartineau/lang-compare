---
title: Tooling & Formatter/Linter
order: 15
---

C++ uses `clang-format` for formatting and `clang-tidy` for linting. Both are part of the LLVM toolchain.

```bash
# clang-format — code formatter
clang-format -i src/*.cpp src/*.h
clang-format --style=file -i main.cpp  # Use .clang-format

# clang-tidy — linter and static analyzer
clang-tidy src/*.cpp -- -std=c++20
clang-tidy --fix src/main.cpp

# cppcheck — additional static analysis
cppcheck --enable=all src/

# include-what-you-use — minimize #includes
iwyu src/main.cpp
```

```yaml
# .clang-format
BasedOnStyle: Google
ColumnLimit: 100
IndentWidth: 4
Language: Cpp
Standard: c++20
AllowShortFunctionsOnASingleLine: Inline
```

```yaml
# .clang-tidy
Checks: >
  -*,
  bugprone-*,
  modernize-*,
  performance-*,
  readability-*,
  -modernize-use-trailing-return-type
WarningsAsErrors: ''
```

