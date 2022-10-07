let magician_name=['johny','trace','mark']

function show_magicians(names){
    names.map((name)=>console.log(name))
}
console.log(`\n Original array`)
show_magicians(magician_name)

let another_array=[]
function make_great(names){
    another_array=magician_name.map((name)=>'Great '+name)
}
make_great()
console.log(`\n Another array`)
show_magicians(another_array)

console.log(`\n Original array`)
show_magicians(magician_name)