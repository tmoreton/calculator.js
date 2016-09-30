var result = [];
var operators = ["+", "-", "/", "x"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];

// var buttons = document.querySelectorAll( '.calc-btn' );
// for(var i = 0; i < buttons.length; i++) {
// 	buttons[i].addEventListener("click", function(){
// 		// Add function here
// 		console.log("keydown")
// 	});
// };


function calculator(el) {
	el = String(el)
    if (numbers.indexOf(el) != -1){
 		if (result.length < 1){
 			result.push(el)
 			document.getElementById('result').innerHTML = el
 		} else if (result.length == 1) {
 			result[0] = result[0]+el
 			document.getElementById('result').innerHTML = result[0]
 		} else if (result.length == 2){
 			result.push(el)
 			document.getElementById('result').innerHTML = el
 		} else if (result.length == 3){
 			result[2] = result[2]+el
 			document.getElementById('result').innerHTML = result[2]
 		}
    } else if (operators.indexOf(el) != -1){
 		if (result.length == 1){
 			result.push(el)
 		} else if (result.length > 1 && operators.indexOf(result[1]) != -1) {
 			var newArray = String(eval(result.join("")))
 			document.getElementById('result').innerHTML = newArray
 			result = [newArray]
 		}
	}
}

function zero() {
	result = []
	document.getElementById('result').innerHTML = "0"
}

function total(){
	var newArray = String(eval(result.join("")))
	document.getElementById('result').innerHTML = newArray
	result = [newArray]
}

function exp(){
	
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