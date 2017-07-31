let assert   = require('assert')
  , myInject = require('./problem_set.js').myInject
  , isPrime  = require('./problem_set.js').isPrime
  , myMap    = require('./problem_set.js').myMap;

describe('#isPrime()', () => {
  it("Should return false for numbers less than 2", () => {
    assert.strictEqual(isPrime(1), false);
    assert.strictEqual(isPrime(0), false);
    assert.strictEqual(isPrime(-13), false);
    assert.strictEqual(isPrime(-953), false);

  });

  it("Should return false for non-prime numbers greater than 2", () => {
    assert.strictEqual(isPrime(10), false);
    assert.strictEqual(isPrime(24), false);
    assert.strictEqual(isPrime(56), false);
    assert.strictEqual(isPrime(111), false);
  });

  it("Should return true for prime numbers", () => {
    assert.strictEqual(isPrime(2), true);
    assert.strictEqual(isPrime(3), true);
    assert.strictEqual(isPrime(97), true);
    assert.strictEqual(isPrime(19087), true);
  });

  /* Feel free to add your own test cases! */
});


/*
  You may want to consider using 'deepEqual', whose
  documentation can be found here:
  https://www.npmjs.com/package/assert#assertdeepequalactual-expected-message
*/
describe('#myMap()', () => {
  it("Should return a mapped array", () => {
    assert.deepEqual(mapped = myMap([1, 2, 3], e => (e * 2)), [2, 4, 6]);
  });
});


/*
  The problem set's description of myInject has three
  examples. The first two result in a known number,
  but the last will return random output.
  Using what we learned in today's lecture, write
  mocha tests using the three given example runs.
  Feel free to add your own tests.
*/
describe('#myInject()', () => {
  it("Should return the accumulation of an array's elements", () => {
    assert.equal( result1 = myInject([1,2,3], (accum, ele, i, arr) => accum + (ele * 2), 1), 13);
  });

  it("Should return the accumulation of an array's elements", () => {
    assert.equal( result2 = myInject([1,2,3], (accum, ele, i, arr) => accum + ele + i), 9);
  });

  it("Should return the concatenation of an array of strings", () => {
    assert.equal(
      result3 = myInject(["I like", "dogs and", "also cats!"],
      (accum, ele, i, arr) => accum + " " + ele.split(" ")[Math.floor(Math.random() * 2)], "Maybe If"),
      "Maybe If " +
      'dog' || 'and' || 'I' || 'like' || 'also' || 'cat!' +
      " " +
      'dog' || 'and' || 'I' || 'like' || 'also' || 'cat!'
    );
  });

  /* Feel free to add your own test cases! */
});
