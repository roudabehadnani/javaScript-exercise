
function myFunction(){

    let message = document.getElementById("message");
    let number = document.getElementById("num").value;
    console.log(number);

    let isPrime = true;

    if( number == 1){
        message.innerHTML = "1 is neither prime nor composite number!";
        message.style.color = "gray";
    }
    else if(number > 1){

        for( let i=2 ; i< number ; i++){
            if(number % i == 0){
                isPrime = false;
                break;
            }
        }

        if(isPrime){
            message.innerHTML = number +  " is a prime number";
            message.style.color = "blue";
        }else{
            message.innerHTML = number + " is NOT a prime number";
            message.style.color = "red";
        }
    }
    else{
        message.innerHTML = "number is NOT prime";
    }

}