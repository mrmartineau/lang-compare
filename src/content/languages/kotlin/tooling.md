---
title: Tooling & Formatter/Linter
order: 15
---

Kotlin uses `ktlint` for linting/formatting and `detekt` for static analysis. IntelliJ IDEA provides built-in formatting.

```bash
# ktlint — linter + formatter (follows Kotlin style guide)
brew install ktlint
ktlint                # Lint
ktlint --format       # Auto-format

# detekt — static analysis
# Add to build.gradle.kts:
# plugins { id("io.gitlab.arturbosch.detekt") version "1.23.0" }
./gradlew detekt

# ktfmt — Google's Kotlin formatter
# Alternative to ktlint with Google/Meta style
```

```yaml
# detekt.yml
complexity:
  LongMethod:
    threshold: 30
  ComplexCondition:
    threshold: 4
style:
  MaxLineLength:
    maxLineLength: 120
  WildcardImport:
    active: true
```

```kotlin
// build.gradle.kts — Spotless plugin (multi-formatter)
plugins {
    id("com.diffplug.spotless") version "6.25.0"
}
spotless {
    kotlin {
        ktlint()
        target("src/**/*.kt")
    }
}
// Run: ./gradlew spotlessApply
```

