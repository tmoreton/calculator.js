var result = [];
var operators = ["+", "-", "/", "*", "^"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
var total_calculated = false

var updateDisplay = function(total){
	document.getElementById('result').innerHTML = total
}

var zero = function() {
	result = [];
	updateDisplay("0");
	total_calculated == false;
}

var total = function(){
	if (result.length > 2 && result[1] != "^") {
		var newArray = String(eval(result.join("")));
		updateDisplay(newArray);
		result = [newArray];
	} else if (result.length > 2 && result[1] == "^"){
		var newArray = String(Math.pow(result[0], result[2]));
		updateDisplay(newArray);
		result = [newArray]
	}
	total_calculated = true
}

var calculator = function(el) {
	// Make sure all variables are string as it's consistent through keyboard and inerface
	el = String(el)
    if (numbers.indexOf(el) != -1){
 		if (result.length < 1){
 			result.push(el);
 			updateDisplay(el);
 		} else if (result.length == 1) {
 			if (total_calculated == false){
	 			result[0] = result[0]+el
	 			updateDisplay(result[0]);
 			} else {
	 			result[0] = el
	 			updateDisplay(result[0]);
 			}
 		} else if (result.length == 2){
 			result.push(el)
 			updateDisplay(el);
 		} else if (result.length == 3){
 			result[2] = result[2]+el
 			updateDisplay(result[2]);
 		}
    } else if (operators.indexOf(el) != -1){
 		if (result.length == 1){
 			result.push(el)
 		} else if (result.length > 1 && operators.indexOf(result[1]) != -1) {
 			total();
 		}
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