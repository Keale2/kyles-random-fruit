var expect = require('chai').expect;
var kylesRandomFruit = require('./index');

describe('kyles-random-fruit', function () {
    describe('all', function () {
       it('should be an array of strings', function () {
           expect(kylesRandomFruit.all).to.satisfy(isArrayOfStrings);
           
           function isArrayOfStrings(arr) {
               return arr.every(function (item) {
                   return typeof item === "string";
               });
           }
       });
    });
    
    describe('random', function () {
        it('should return a random item from kylesRandomFruit.all', function () {
            var randomItem = kylesRandomFruit.random();
            expect(kylesRandomFruit.all).to.include(randomItem);
        });
    });
    
});