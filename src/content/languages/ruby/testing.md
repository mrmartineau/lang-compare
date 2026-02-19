---
title: Testing
order: 13
---

RSpec and Minitest are the two main testing frameworks. RSpec is more popular in the Rails community.

```ruby
# RSpec
RSpec.describe 'Math' do
  it 'adds numbers' do
    expect(1 + 2).to eq(3)
  end

  it 'handles arrays' do
    expect([1, 2, 3]).to include(2)
    expect([1, 2, 3]).to have_attributes(length: 3)
  end

  context 'with negative numbers' do
    it 'returns negative sum' do
      expect(-1 + -2).to eq(-3)
    end
  end
end
```

```ruby
# Minitest
require 'minitest/autorun'

class MathTest < Minitest::Test
  def test_addition
    assert_equal 3, 1 + 2
  end

  def test_array_includes
    assert_includes [1, 2, 3], 2
  end
end
```

```bash
# Run tests
bundle exec rspec                # RSpec
bundle exec rspec spec/models/   # Specific directory
ruby -Itest test/math_test.rb    # Minitest
bundle exec rails test           # Rails default (Minitest)

# With coverage
# Add simplecov gem, then: COVERAGE=true bundle exec rspec
```

