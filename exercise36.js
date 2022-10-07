function make_shirt(size,msg){
    if(size=='large' || size=='medium'){
        console.log(`Summarizing the size large`)
        console.log(`Message on shirt = I Love Javascript`)
    }
    else{
        console.log(`Summarizing the size ${size}`)
        console.log(`Message on shirt = ${msg}`)
    }
    
}

make_shirt('large','Hello world')
make_shirt('small','I Love Pakistan')