var main = require('../index');
var assert = require('assert');
describe('Regular factorial value', function() {
    it('should return 7 for factorial(7)', function() {
        assert.strictEqual(main.factorial(7), 5040);
      });
});

describe('First two terms', function() {
  it('should return 0 and 1 for first two terms', function() {
      assert.strictEqual(main.fibonacci(0), 0);
      assert.strictEqual(main.fibonacci(1), 1);
    });
});