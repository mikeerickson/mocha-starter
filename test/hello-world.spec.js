/*global require, describe, it*/

var assert = require('assert');

describe('sample test', function () {
  it('should pass', function () {
    assert(true === true);
  });

  it('should fail (this is done on purpose to assure we handle fail)', function () {
    assert(true);
  });

});
