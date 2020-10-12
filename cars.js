class Vehicle{

    //Input parameters to constructor
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    Information(){
        console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`)
    }
}


//New class that inherits from previous class
class Cars extends Vehicle{
    constructor(make, model, year, doors){
        super(make, model, year);   //superclass constructor
        this.doors = doors;
    }


Information(){
    super.Information(); //calls superclass
    console.log(`Doors: ${this.doors}`);
}
}

let myCar = new Cars('Toyota', 'Corolla', 2003, 5);
myCar.Information();