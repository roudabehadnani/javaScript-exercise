
function myFunction(){

    let input = document.getElementById("input").value;

    let message = document.getElementById("message");
    let message1 = document.getElementById("message1");

// to upper case
    let string = input.toLowerCase()
                        .split(' ');

    for(let i = 0; i<string.length; i++){
        string[i] = string[i] .charAt(0).toUpperCase() + string[i].substring(1);
           
    }
    string = string.join(' ');
    console.log(string);


//finding the longest word

    let splitInput = input.split(' ');

    let longestWord = 0;
    let found;
    
    for( let i = 0; i<splitInput.length; i++){

        if(splitInput[i].length > longestWord ){
            longestWord = splitInput[i].length;
            found = splitInput[i];
        }       
    }

    message.innerHTML = " After modifying : " + string;

    message1.innerHTML = " The longest word is : " + found + " with " + longestWord + " chars.";
    message1.style.fontSize = "20px";
    
    
}

