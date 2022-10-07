let names=['aiman','aisha','zohra','iqra']

names.unshift('alia')
let len = parseInt(names.length/2)
names.splice(len,1,'fiza')
names.push('jia')
names.map((name)=>console.log(`Hello ${name}! You are invited to dinner. I have found bigger dinner table.`))

// start of exercise 17
console.log('\nYou can only invite 2 people for dinner')

while(names.length!==2){
    let name = names.pop()
    console.log(`Sorry ${name}, I can't invite you to dinner `)
}
console.log(`\n`)
names.map((name)=>console.log(`Hello ${name}! You are still invited`))
names.pop()
names.pop()
console.log(`list is empty ${names}`)