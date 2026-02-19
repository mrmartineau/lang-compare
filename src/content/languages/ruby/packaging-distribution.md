---
title: Packaging & Distribution
order: 23
---

Publish gems to **RubyGems.org**. Deploy apps via Docker, Heroku, or platform services.

```bash
# Create a gem
bundle gem my-gem
# Edit my-gem.gemspec, add code to lib/

# Build and publish
gem build my-gem.gemspec
gem push my-gem-1.0.0.gem

# Or with bundler
bundle exec rake release
# Tags, builds, and pushes to RubyGems.org
```

```ruby
# my-gem.gemspec
Gem::Specification.new do |spec|
  spec.name          = 'my-gem'
  spec.version       = '1.0.0'
  spec.authors       = ['Your Name']
  spec.summary       = 'A useful gem'
  spec.files         = Dir['lib/**/*']
  spec.require_paths = ['lib']

  spec.add_dependency 'httparty', '~> 0.21'
  spec.add_development_dependency 'rspec', '~> 3.12'
end
```

```bash
# Docker deployment
FROM ruby:3.3-alpine
RUN apk add --no-cache build-base postgresql-dev
WORKDIR /app
COPY Gemfile Gemfile.lock ./
RUN bundle install --without development test
COPY . .
CMD ["bundle", "exec", "puma", "-C", "config/puma.rb"]

# Heroku
heroku create my-app
git push heroku main

# Kamal — Rails deployment tool (Docker-based)
gem install kamal
kamal setup
kamal deploy
```

