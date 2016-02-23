var uniqueRandomArray = require('unique-random-array');
var fruits = require('./fruits.json');

module.exports = {
    all: fruits,
    random: uniqueRandomArray(fruits)
};