---
title: Installation & Getting Started
order: 12
---

Ruby is pre-installed on macOS. Use a version manager like `rbenv` or `asdf` for managing versions.

```bash
# macOS (Homebrew)
brew install ruby

# rbenv — recommended version manager
brew install rbenv ruby-build
rbenv install 3.3.0
rbenv global 3.3.0

# Or use asdf
asdf plugin add ruby
asdf install ruby 3.3.0
asdf global ruby 3.3.0

# Ubuntu / Debian
sudo apt install ruby-full

# Check version
ruby --version
```

```bash
# IRB — interactive Ruby (REPL)
irb

# Pry — enhanced REPL
gem install pry
pry

# Run a script
ruby script.rb

# Quick one-liner
ruby -e "puts 'Hello, Ruby!'"

# Run with warnings
ruby -w script.rb
```

