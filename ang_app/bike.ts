class Bike {
    price: number;
    maxSpeed: string;
    miles: number;
    
    constructor(price: number, speed: string){
        this.price = price;
        this.maxSpeed = speed;
        this.miles = 0;
    }

    displayInfo(){
        console.log(this.price, this.maxSpeed, this.miles);
        return this;
    }
    ride(){
        console.log('Riding');
        this.miles += 10;
        return this;
    }
    reverse(){
        console.log('Reversing');
        this.miles -= 5;
        return this;
    } 
}
const bmx = new Bike(100, '20')
bmx.ride()
bmx.reverse()