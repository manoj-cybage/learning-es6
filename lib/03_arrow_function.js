'use strict';

/*
    Arrow Functions are a shorthand for anonymous functions in JavaScript.
    For the most part, they behave just like normal,
    anonymous functions but with a lighter syntax.

    -- standard function
    var myFunction = function(arg) {
        return arg.toUpperCase();
    };

    -- with arrow function
    var myFunction = (arg) => arg.toUpperCase();

    -- http://learnharmony.org/#/lessons/arrow-functions?_k=mmmede
*/

var myArray = [1, 2, 3, 4, 5];

// statement bodies
myArray.map(function (arr) {
    console.log(arr);
});

var printName = function printName(n) {
    console.log(n);
};

printName('Aong');

// expression bodies
var newArray = myArray.map(function (v) {
    return v;
});
console.log(newArray);