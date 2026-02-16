---
title: Packaging & Distribution
order: 23
---

Libraries to **Maven Central**. Android apps to **Google Play**. Kotlin/Native produces standalone binaries.

```kotlin
// build.gradle.kts — library publishing
plugins {
    `maven-publish`
    signing
}

publishing {
    publications {
        create<MavenPublication>("release") {
            groupId = "com.example"
            artifactId = "my-lib"
            version = "1.0.0"
            from(components["kotlin"])
        }
    }
    repositories {
        maven {
            url = uri("https://s01.oss.sonatype.org/service/local/staging/deploy/maven2/")
            credentials {
                username = project.findProperty("ossrhUsername") as String
                password = project.findProperty("ossrhPassword") as String
            }
        }
    }
}
```

```bash
# Publish to Maven Central
./gradlew publish

# Fat JAR (all dependencies included)
# plugins { id("com.github.johnrengelman.shadow") }
./gradlew shadowJar
java -jar build/libs/app-all.jar

# Kotlin/Native binary
./gradlew linkReleaseExecutableNative
# Output: build/bin/native/releaseExecutable/app.kexe

# Android — Google Play
# Build > Generate Signed Bundle/APK in Android Studio
# Upload .aab to Play Console

# Docker (JVM)
FROM eclipse-temurin:21-jre-alpine
COPY build/libs/app-all.jar /app.jar
ENTRYPOINT ["java", "-jar", "/app.jar"]

# Kotlin scripting distribution
# .main.kts files can be run directly: kotlin script.main.kts
```

