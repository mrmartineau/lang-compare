---
title: Packaging & Distribution
order: 23
---

No central package registry. Distribute via **vcpkg/Conan**, system package managers, or pre-built binaries. CMake is the build standard.

```cmake
# CMakeLists.txt — install targets for distribution
install(TARGETS mylib
  EXPORT mylib-targets
  LIBRARY DESTINATION lib
  ARCHIVE DESTINATION lib
  RUNTIME DESTINATION bin
  INCLUDES DESTINATION include
)
install(DIRECTORY include/ DESTINATION include)
install(EXPORT mylib-targets
  FILE mylib-config.cmake
  NAMESPACE mylib::
  DESTINATION lib/cmake/mylib
)
```

```bash
# vcpkg — publish a port
# Create: ports/mylib/portfile.cmake + vcpkg.json
# Submit PR to microsoft/vcpkg

# Conan — publish a package
conan create .
conan upload mylib/1.0 --remote=myremote

# CPack — create installers from CMake
cmake -B build -DCMAKE_BUILD_TYPE=Release
cmake --build build
cd build && cpack
# Generates: .deb, .rpm, .tar.gz, .zip, NSIS installer

# Static linking for portable binaries
g++ -static -o myapp main.cpp

# Docker
FROM ubuntu:22.04 AS builder
RUN apt-get update && apt-get install -y build-essential cmake
COPY . /app
WORKDIR /app
RUN cmake -B build -DCMAKE_BUILD_TYPE=Release && cmake --build build

FROM ubuntu:22.04
COPY --from=builder /app/build/myapp /usr/local/bin/
CMD ["myapp"]
```

