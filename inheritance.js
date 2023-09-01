class Vehicle {
    constructor(name, price, year){
        this.name = name;
        this.price = price;
        this.year = year;
    }
    move(){
        console.log('gari chole na chole na chole nare')
    }
}

class Bus extends Vehicle {
    constructor(name, price, seat, ticketPrice){
        super(name, price);
        this.seat = seat;
        this.ticketPrice = ticketPrice;
    }
}

class Truck extends Vehicle {
    constructor(name, price, load){
        super(name, price);
        this.load = load;
    }

}