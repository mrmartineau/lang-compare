---
title: Package Management
order: 10
---

**RubyGems** is the package manager. **Bundler** manages project dependencies via a `Gemfile`.

```bash
# Install a gem globally
gem install rails
gem install pry

# Bundler — project dependency management
gem install bundler

# Install all dependencies from Gemfile
bundle install

# Add a gem to the project
bundle add sidekiq

# Update dependencies
bundle update
bundle update rails  # Update specific gem

# Execute a command in bundle context
bundle exec rails server
bundle exec rspec
```

```ruby
# Gemfile
source 'https://rubygems.org'

ruby '3.3.0'

gem 'rails', '~> 7.1'
gem 'pg'
gem 'puma'
gem 'redis'

group :development, :test do
  gem 'rspec-rails'
  gem 'pry-byebug'
  gem 'factory_bot_rails'
end

group :development do
  gem 'rubocop', require: false
end
```

