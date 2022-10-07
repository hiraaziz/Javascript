let names=['aiman','aisha','zohra','iqra']
let remove = names.splice(1,1)
console.log(`${remove} can't make it`)

names.splice(1,1,'fatima')
names.map((name)=>console.log(`Hello ${name}! You are invited to dinner`))

console.log(`${names.length} number of people are invited to dinner`)