---
title: Modules & Imports
order: 8
---

Ruby uses `require` to load files and modules for namespacing. Bundler and autoloading (Zeitwerk in Rails) manage dependencies.

```ruby
# require — load a file once
require 'json'
require 'net/http'

# require_relative — load relative to current file
require_relative 'lib/helper'
require_relative '../config/database'

# Modules as namespaces
module MyApp
  module Models
    class User
      attr_accessor :name
    end
  end
end
user = MyApp::Models::User.new

# Include module methods
module Greetable
  def greet
    "Hello, #{name}!"
  end
end

class User
  include Greetable
  attr_reader :name
  def initialize(name) = @name = name
end
```

```ruby
# Zeitwerk autoloading (Rails default)
# File: app/models/user.rb → class User
# File: app/services/auth/login.rb → class Auth::Login
# No require needed — autoloaded by convention

# Bundler — loads gems from Gemfile
require 'bundler/setup'
Bundler.require(:default)

# load — always re-executes file (useful for reloading)
load 'config.rb'
```

