function make_album(name,title,track){
    let album={
        'name':name,
        'title':title,
    }
    if(track)album.track=track
    return album
}

let album1=make_album('hira','abc')
let album2=make_album('aiman','band')
let album3=make_album('zohra','xyz')
console.log(album1)
console.log(album2)
console.log(album3)
let album4=make_album('rida','mno',3)
console.log(album4)