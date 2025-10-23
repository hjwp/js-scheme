const jss = require('../lib/jsscheme');

describe('Interpreter', function() {

  it('should return primitives as themselves', function() {
    result = jss.eval(42)
    expect(result).toEqual(42);
  });

});
