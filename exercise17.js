let places = ['switzerland','grece','germany','paris']

console.log('---Original array---')
places.map((place)=>console.log(place))

console.log(`\n---Alphabetically order list---`)
let places_sort=places.slice()
places_sort.sort()
places_sort.map((place)=>console.log(place))

console.log(`\n---Original array---`)
places.map((place)=>console.log(place))

console.log(`\n---Reverse list---`)
for(let i=places.length-1;i>=0;i--){
    console.log(places[i])
}
console.log(`\n---Original array---`)
places.map((place)=>console.log(place))

console.log(`\n---Reverse list order---`)
places.reverse()
places.map((place)=>console.log(place))

console.log(`\n---Original list order---`)
places.reverse()
places.map((place)=>console.log(place))

console.log(`\n---Sorted array---`)
places.sort()
places.map((place)=>console.log(place))

console.log(`\n---Unsorted array---`)
places.reverse()
places.map((place)=>console.log(place))