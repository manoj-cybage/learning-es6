// default parameter
const printName = (name = "Pirate") => {
    console.log(`Your name is ${name}.`);
}

printName('Teerapong Singthong');   // Your name is Teerapong Singthong
printName();    // Your name is Pirate

// rest parameter
// the rest parameter will be contained in array
const printEmployee = (firstname, lastname, ...infos) => {
    console.log(firstname);
    console.log(lastname);
    console.log(infos)
}

printEmployee('Golf', 'Pirate', 'DST Output', '14th floor');

// spread parameter
// const printSomething = (firstname, lastname, flag1, flag2) => {
//     console.log(firstname);
// }
//
// const params = ['Teerapong', 'Singthong', true, false];
// printSomething(params);
