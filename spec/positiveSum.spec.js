const positiveSum = require('.jest/positive.js');

discribe('My operations testing', function() {
  discribe('Simple operation', function() {
    test('positiveSum', function() {
      expect(positiveSum([1,2,3,4,5]).toEqual(15))
    })
  })
})
