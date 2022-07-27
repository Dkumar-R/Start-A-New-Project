


let car = {
    name:'maruti 800',
    topSpeed:80,
    run: function(){
        console.log('Car is running');
    }
}
//Creating a constructors for care

function GenerlalCar (givenName, giveSpeed){
    this.name = givenName;
    this.topSpeed = giveSpeed;
    this.run = function(){
        console.log(`${this.name} is running`);
    }
    this.analyze = function(){
        console.log(`this is slower by ${400- this.topSpeed} kph marides`);
    }
}
console.log(car)

car1 = new GenerlalCar('Nissan', 180);
car2 = new GenerlalCar('Alro',200);
car3 = new GenerlalCar('Mahindra',250);
car4 = new GenerlalCar ('Tata', 300);
console.log(car1, car2 ,car3, car4);
