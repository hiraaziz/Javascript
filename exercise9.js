const prompt = require('prompt-sync')();

//This is exercise 6 comments
//Take input from user
let name = prompt('What is your name? ')
  
// add padding at start
const paddedStr = name.padStart(20, ' ')
// add padding at end
const paddedend = paddedStr.padEnd(20,' ')
console.log(`After adding whitespace ${paddedend}\n`)

// remove padding from both sides
const trim_str = paddedend.trim()
console.log(`After removing whitespace ${trim_str}\t`)
   