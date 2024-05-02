function calculateBMI(height, weight, unitType) { 
    // 30 < heightCM >300, integer 
    // 1 < weight > 500, integer 
    // unittype = US ->> pounds, inches 
    // unittype = SI ->> kg, cm 

    if (unitType === "US") {
        var weightKG = weight / 2.20462; //lbs to kg 
       
        var heightCM = height / 0.393701;//in to cm 
    } else if (unitType === "SI"){
        var weightKG = weight //renaming
        
        var heightCM = height  //renaming
    } else {
        //invalid unit type
        throw InvalidArgumentExeption("Invalid UnitType"); 
    }
       

    if (heightCM < 30 || heightCM > 300 || weightKG < 1 || weightKG > 500) {
        //invalid input data type
        throw InvalidArgumentExeption("Invalid Height or Weight: Range is 1kg (2.3lbs) - 500kg(1103lbs) and 30cm (11.9in) - 300cm(119in)");
    } else {
        var bmi = weightKG / ((heightCM / 100) ** 2);

        return bmi;
    }
}

function determineBMICategory(height, weight, unitType) {
    var bmi = calculateBMI(height, weight, unitType);
    
    if (bmi < 18.5) {
        console.log([bmi, "Underweight"]);
        return [bmi, "Underweight"];
        
    } else if (bmi >= 18.5 && bmi < 24.9) { 
        console.log([bmi, "Normal weight"]);
        return [bmi, "Normal weight"];

    } else if (bmi >= 25 && bmi < 29.9) { 
        console.log([bmi, "Overweight"]);
        return [bmi, "Overweight"];

    } else { 
        console.log([bmi, "Obesity"]);
        return [bmi, "Obesity"];
    }
}

function doStuff(height, weight, unitType){
     
    determineBMICategory(49.2, 441, "US");

}

doStuff();
    
    
    