const assert = require('chai').assert;
const app = require('../src/app');

sayHelloResult = app.sayHello();
addNumbersResult = app.addNumbers(5, 1);

describe('App', function () {
  describe('sayHello()', function () {
    it('app should return hello', function () {
      assert.equal(sayHelloResult, 'Hello');
    });
  });

  describe('addNumbers()', function(){
    it('add numbers should be a number', function(){
      assert.typeOf(addNumbersResult, 'number')
    })
  })
});
