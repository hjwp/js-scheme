const jss = require('../lib/jsscheme');

const fact = [
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
    result = jss.eval(42);
    expect(result).toEqual(42);
  });

});
