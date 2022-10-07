let magician_name=['johny','trace','mark']

function show_magicians(names){
    names.map((name)=>console.log(name))
}
show_magicians(magician_name)

function make_great(names){
    magician_name=magician_name.map((name)=>'Great '+name)
}
make_great()
show_magicians(magician_name)