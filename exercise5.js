const prompt = require('prompt-sync')();

let name = prompt('What is your name? ')
  
const paddedStr = name.padStart(20, ' ')
const paddedend = paddedStr.padEnd(20,' ')
console.log(`After adding whitespace ${paddedend}\n`)
const trim_str = paddedend.trim()
console.log(`After removing whitespace ${trim_str}\t`)
   