class BMI {

    //Adds the 2 parameters to the class
    constructor(height, weight) {
        this.height = height;
        this.weight = weight;
    }

    //The BMI method
    calculateBMI() {
        let bmi = this.weight / (this.height**2);
        return bmi;

    }
}

//User inputs
let MyBmi = new BMI(2, 90);

//Perform Calculation
let totalBMI = MyBmi.calculateBMI();

//Display Result
console.log(totalBMI);