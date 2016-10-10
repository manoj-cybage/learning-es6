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

const myArray = [1, 2, 3, 4, 5];

// statement bodies
myArray.map( arr => {
    console.log(arr);
});

const printName = (n) => {
    console.log(n);
}

printName('Aong');


// expression bodies
const newArray = myArray.map((v) => v);
console.log(newArray)
