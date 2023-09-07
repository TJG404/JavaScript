/** TDZ(Temporal Dead Zone) */
console.log(i);
var i = "I am a var";

console.log(j);
let j = "I am a let"; //ReferenceError: Cannot access 'j' before initialization
