function car(manufacturer,modelname,...features){
    
    let car_info={
        "manufacturer":manufacturer,
        "modelname":modelname, 
    } 
    car_info={...car_info,features}
    return car_info
    
}

let car_details=car('Honda','A709',{"color":"blue"},{"feature":"PassengerAirBag"})
console.log(car_details)