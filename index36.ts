//CARS
function carInfo(manufacturer:string, model:string, color?:string, seats?:number) {
    let car={
        manufacturer,
        model,
        color,
        seats
    }
    return car
}

let car= carInfo('Toyota', 'Corolla', 'Black', 4)

console.log(car)