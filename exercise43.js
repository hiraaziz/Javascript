
function sandwitch_items(){
    let item = []
    for(let i =0 ;i<arguments.length;i++){
        item.push(arguments[i])
    }
    item.map((user)=>console.log(user))

}
sandwitch_items(['peppers','eggs','mayonise'])
sandwitch_items(['peppers','eggs','mayonise','cheese','peety'])
sandwitch_items(['onion','capsicum'])
