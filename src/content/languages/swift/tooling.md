---
title: Tooling & Formatter/Linter
order: 15
---

Swift uses `swift-format` (Apple's official formatter) or SwiftLint for linting. Xcode provides built-in formatting.

```bash
# swift-format — official formatter
brew install swift-format
swift-format format --in-place Sources/
swift-format lint Sources/

# SwiftLint — community linter (widely adopted)
brew install swiftlint
swiftlint
swiftlint --fix       # Auto-fix
```

```yaml
# .swiftlint.yml
disabled_rules:
  - trailing_whitespace
opt_in_rules:
  - empty_count
  - closure_spacing
  - force_unwrapping
excluded:
  - .build
  - Packages
line_length:
  warning: 120
  error: 150
```

```json
// .swift-format (JSON config)
{
  "version": 1,
  "indentation": { "spaces": 4 },
  "lineLength": 120,
  "maximumBlankLines": 1,
  "respectsExistingLineBreaks": true
}
```

```bash
# Xcode: Editor > Structure > Re-Indent (Ctrl+I)
# Periphery — detect unused code
brew install peripheryapp/periphery/periphery
periphery scan
```

