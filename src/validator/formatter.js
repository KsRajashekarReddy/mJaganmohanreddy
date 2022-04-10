
let format = function formatter() {

const greeting = '   functionup   ';

console.log(greeting);
// expected output: "  functionup   ";

console.log(greeting.trim());

console.log(greeting.toLocaleLowerCase());
console.log(greeting.toLocaleUpperCase());




}
module.exports.formatter = format