var result = "0";
var operators = ["+", "-", "/", "x"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
var buttons = document.querySelectorAll( '.calc-btn' );

for(var i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener("click", function(){
		// Add function here
	});
};


function calculator(el) {
    if (numbers.indexOf(el) != -1){
    	result += el
    	document.getElementById('result').innerHTML = result
    } else if (operators.indexOf(el) != -1){
    	result += el
    	document.getElementById('result').innerHTML = result
	}
}

function zero() {
	result = "0"
	document.getElementById('result').innerHTML = result
}

function total(){
	document.getElementById('result').innerHTML = eval(result)
}

document.addEventListener('keydown', function(event) {
	var key = event.key
	if (numbers.indexOf(key) != -1){
    	result += key
    	document.getElementById('result').innerHTML = result
	} else if (operators.indexOf(key) != -1){
    	result += key
    	document.getElementById('result').innerHTML = result
	} else if (key == "Enter"){
		total();
	} else if (key == "Backspace"){
		zero();
	}
});