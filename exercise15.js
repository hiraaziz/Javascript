let names=['aiman','aisha','zohra','iqra']

names.unshift('alia')
let len = parseInt(names.length/2)
names.splice(len,1,'fiza')
names.push('jia')
names.map((name)=>console.log(`Hello ${name}! You are invited to dinner. I have found bigger dinner table.`))
