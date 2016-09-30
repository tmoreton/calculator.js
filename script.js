var result = [];
var operators = ["+", "-", "/", "*", "^"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
var total_calculated = false

//Added this because the long javascript line was ugly
var updateDisplay = function(total){
	document.getElementById('result').innerHTML = total
}

//Clear out display and result array
var zero = function() {
	result = [];
	updateDisplay("0");
	total_calculated == false;
}

var total = function(){
	//Combine array into string and evaluate if there's no exponents
	if (result.length > 2 && result[1] != "^") {
		var newArray = String(eval(result.join("")));
		updateDisplay(newArray);
		result = [newArray];
	// Treat exponents differently since eval doesn't work
	} else if (result.length > 2 && result[1] == "^"){
		var newArray = String(Math.pow(result[0], result[2]));
		updateDisplay(newArray);
		result = [newArray]
	}
	//Set to true so it doesn't overwrite value below
	total_calculated = true
}

var evaluate_num = function(el){
	//Just push value if array is empty
	if (result.length < 1){
		result.push(el);
		updateDisplay(el);
	//Add to first value in array
	} else if (result.length == 1) {
		if (total_calculated == false){
			result[0] = result[0]+el
			updateDisplay(result[0]);
		} else {
			result[0] = el
			updateDisplay(result[0]);
			total_calculated = false
		}
	//Add second number in array
	} else if (result.length == 2){
		result.push(el)
		updateDisplay(el);
	//Increase second number value
	} else if (result.length == 3){
		result[2] = result[2]+el
		updateDisplay(result[2]);
	}
}

var evaluate_sym = function(el){
	// Evaluate if array is full, otherwise add to array
	if (result.length == 1){
		result.push(el)
	} else if (result.length > 1 && operators.indexOf(result[1]) != -1) {
		total();
	}
}

var calculator = function(el) {
	// Make sure all variables are string as it's consistent through keyboard and inerface
	el = String(el)

	//Check if input is a number
    if (numbers.indexOf(el) != -1){
    	evaluate_num(el)

    //Check if input is a symbol
    } else if (operators.indexOf(el) != -1){
    	evaluate_sym(el)

 	// Check keyboard Enter key
	} else if (el == "Enter"){
		total();

	// Check keyboard Delete key
	} else if (el == "Backspace"){
		zero();
	}
}

// Grab all the buttons 
var buttons = document.querySelectorAll( '.calc-num' );
for(var i = 0; i < buttons.length; i++) {
	// Add Calculator function to each button
	//Pass in the innertext as a variable 
	buttons[i].addEventListener("click", function(){calculator(this.innerText)})
};

// Add listener for keyboard keys and attach calculator function
document.addEventListener('keydown', function(event) {
	calculator(event.key)
});