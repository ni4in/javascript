const mark = { fullName: 'Mark Miller', 
            mass: 78, 
            height: 1.69,
            calcBMI: function() {this.BMI = this.mass/this.height**2; return this.BMI } 
        };

const john = { fullName: 'John Smith', 
            mass: 92, 
            height: 1.95,
            calcBMI: function() {this.BMI = this.mass/this.height**2; return this.BMI } 
        };
mark.calcBMI();
john.calcBMI();

if (mark.BMI > john.BMI){
        console.log(`${mark.fullName} BMI (${mark.BMI}) is higher than ${john.fullName} BMI (${john.BMI})`);
}
else if (mark.BMI < john.BMI){
        console.log(`${john.fullName} BMI (${john.BMI}) is higher than${mark.fullName} BMI (${mark.BMI})`);
}
else{
        console.log(`${john.fullName} BMI (${john.BMI}) and ${mark.fullName} BMI (${mark.BMI}) have same BMI`);
}
    

