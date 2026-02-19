---
title: Project Scaffolding
order: 11
---

Use `bundler` for dependency management and Rails or Sinatra for web projects.

```bash
# Basic Ruby project
mkdir my-project && cd my-project
bundle init            # Creates Gemfile

# Ruby on Rails — full-stack web framework
gem install rails
rails new my-app
cd my-app && rails server

# Rails with specific options
rails new my-api --api                  # API-only
rails new my-app --database=postgresql  # PostgreSQL

# Sinatra — lightweight web framework
mkdir my-app && cd my-app
bundle init
# Add: gem 'sinatra' to Gemfile
bundle install
ruby app.rb

# Gem scaffold (create a new gem/library)
bundle gem my-gem
# Creates lib/, spec/, Gemfile, .gemspec
```

