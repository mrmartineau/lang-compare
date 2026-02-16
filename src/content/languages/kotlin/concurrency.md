---
title: Concurrency
order: 17
---

**Coroutines** — lightweight, structured concurrency built on top of the JVM. First-class support via `kotlinx.coroutines`.

```kotlin
import kotlinx.coroutines.*

// Launch a coroutine
fun main() = runBlocking {
    launch {
        delay(1000)
        println("World!")
    }
    println("Hello,")
}

// async/await — concurrent decomposition
suspend fun fetchBoth(): Pair<User, Posts> = coroutineScope {
    val user = async { fetchUser() }
    val posts = async { fetchPosts() }
    Pair(user.await(), posts.await())
}

// Structured concurrency — parent waits for children
coroutineScope {
    launch { doTaskA() }
    launch { doTaskB() }
} // Both complete before continuing
```

```kotlin
// Flow — reactive streams (cold)
import kotlinx.coroutines.flow.*

fun numbers(): Flow<Int> = flow {
    for (i in 1..5) {
        delay(100)
        emit(i)
    }
}

numbers()
    .filter { it % 2 == 0 }
    .map { it * 10 }
    .collect { println(it) }

// Channels — hot communication between coroutines
val channel = Channel<Int>()
launch { channel.send(42) }
val value = channel.receive()

// Dispatchers — control thread pool
withContext(Dispatchers.IO) { readFile() }
withContext(Dispatchers.Default) { compute() }
withContext(Dispatchers.Main) { updateUI() }
```

