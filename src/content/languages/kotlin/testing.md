---
title: Testing
order: 13
---

JUnit 5 is the standard. Kotest is a Kotlin-native alternative with expressive DSLs. MockK is the preferred mocking library.

```kotlin
// JUnit 5 with Kotlin
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.Assertions.*

class MathTest {
    @Test
    fun `adds two numbers`() {
        assertEquals(3, 1 + 2)
    }

    @Test
    fun `list contains element`() {
        val list = listOf(1, 2, 3)
        assertTrue(2 in list)
        assertEquals(3, list.size)
    }
}

// Parameterized tests
import org.junit.jupiter.params.ParameterizedTest
import org.junit.jupiter.params.provider.CsvSource

class ParameterizedMathTest {
    @ParameterizedTest
    @CsvSource("1,2,3", "0,0,0", "-1,1,0")
    fun `adds correctly`(a: Int, b: Int, expected: Int) {
        assertEquals(expected, a + b)
    }
}
```

```kotlin
// Kotest — Kotlin-native testing framework
import io.kotest.core.spec.style.StringSpec
import io.kotest.matchers.shouldBe
import io.kotest.matchers.collections.shouldContain

class MathSpec : StringSpec({
    "addition works" {
        (1 + 2) shouldBe 3
    }

    "list contains element" {
        listOf(1, 2, 3) shouldContain 2
    }
})
```

```bash
# Run tests
./gradlew test                          # All tests
./gradlew test --tests "MathTest"       # Specific class
./gradlew test --tests "*adds*"         # Pattern match
```

