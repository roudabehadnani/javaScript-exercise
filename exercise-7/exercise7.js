
function myFunction(){

    let input = document.getElementById("input").value;

    let message = document.getElementById("message");

    let combineStrings = [];

    for(let i = 0; i < input.length; i++){
        
        for(let j = i + 1; j< input.length + 1; j++){

            combineStrings.push(input.slice( i , j));
        }
    }
    let strings = combineStrings.toString();
    
    message.innerHTML = "all combinations : " + strings;
    message.style.fontSize = "25px";
}