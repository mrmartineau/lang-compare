---
title: Tooling & Formatter/Linter
order: 15
---

RuboCop is the standard linter and formatter. Sorbet adds static typing.

```bash
# RuboCop — linter & formatter
gem install rubocop
rubocop                    # Lint
rubocop -a                 # Auto-fix safe cops
rubocop -A                 # Auto-fix all cops (including unsafe)

# RuboCop with Rails extensions
gem install rubocop-rails rubocop-rspec rubocop-performance
rubocop --require rubocop-rails

# Standard Ruby — opinionated RuboCop config (zero config)
gem install standard
standardrb                 # Lint
standardrb --fix           # Auto-fix

# Sorbet — static type checker
gem install sorbet sorbet-runtime
srb init                   # Initialize in project
srb tc                     # Type check

# Steep — alternative type checker (uses RBS)
gem install steep
steep check
```

```yaml
# .rubocop.yml
require:
  - rubocop-rails
  - rubocop-rspec

AllCops:
  NewCops: enable
  TargetRubyVersion: 3.3

Style/StringLiterals:
  EnforcedStyle: single_quotes

Metrics/MethodLength:
  Max: 15
```

