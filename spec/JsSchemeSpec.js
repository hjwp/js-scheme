const jss = require('../lib/jsscheme');

const defineFact = [
    "define",
    "fact",
    [
        "lambda",
        ["n",],
        [
            "if",
            ["=", "n", 1],
            1,
            ["*", "n", ["fact", ["-", "n", 1]]],
        ],
    ],
]

describe('Interpreter', function() {

  it('should return primitives as themselves', function() {
    const result = jss.eval(42);
    expect(result).toEqual(42);
  });

  it('should let you define a variable', function() {
    jss.eval(["define", "n", 5]);
    const result = jss.eval("n");
    expect(result).toEqual(5);
  });

  // other ideas for tests:
  // expresssions & builtin operators, eg (+ 1 1)
  it('should be able to apply builtin + to two arguments', function() {
    const result = jss.eval(["+", 1, 2]);
    expect(result).toEqual(3);
  });

  // nested expressions
  // if
  // lambda
  // any of the above with nested stuff

  xit('should be able to do factorial', function() {
    jss.eval(defineFact);
    result = jss.eval(["fact", 5]);
    expect(result).toEqual(120);
  });

});
