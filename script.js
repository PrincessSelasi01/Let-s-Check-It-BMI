function calculateBMI() {
	var height = parseFloat(document.getElementById("height").value);
	var weight = parseFloat(document.getElementById("weight").value);
	var result = document.getElementById("result");

	if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
		result.innerHTML = "Please enter valid values for height and weight.";
		return;
	}

	var bmi = weight / ((height/100) * (height/100));
	bmi = bmi.toFixed(2);

	result.innerHTML = "Your BMI is: " + bmi;

	if (bmi < 18.5) {
		result.style.color = "#28a745";
		result.innerHTML += " (Underweight) You may need to see a general practioner, You may need to increase calorie intake";
	} else if (bmi >= 18.5 && bmi < 25) {
		result.style.color = "#28a745";
		result.innerHTML += " (Normal weight) Keep maintaining your Diet and Activity levels";
	} else if (bmi >= 25 && bmi < 30) {
		result.style.color = "#ffc107";
		result.innerHTML += " (Overweight) You may need to review your Calorie intake and Activity levels";
    }
    else {
        result.style.color = "#dc3545";
        result.innerHTML += " (Obese) You may be at risk of Type 2 diabetes and Heart Disease. You need to exercise now";
    }
    
}