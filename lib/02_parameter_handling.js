'use strict';

// default parameter
var printName = function printName() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Pirate";

    console.log('Your name is ' + name + '.');
};

printName('Teerapong Singthong'); // Your name is Teerapong Singthong
printName(); // Your name is Pirate

// rest parameter
// the rest parameter will be contained in array
var printEmployee = function printEmployee(firstname, lastname) {
    for (var _len = arguments.length, infos = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        infos[_key - 2] = arguments[_key];
    }

    console.log(firstname);
    console.log(lastname);
    console.log(infos);
};

printEmployee('Golf', 'Pirate', 'DST Output', '14th floor');

// spread parameter
// const printSomething = (firstname, lastname, flag1, flag2) => {
//     console.log(firstname);
// }
//
// const params = ['Teerapong', 'Singthong', true, false];
// printSomething(params);