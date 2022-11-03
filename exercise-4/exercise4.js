

function myFunction(){

    let num = document.getElementById("number").value;
    let message = document.getElementById("message");

    if(0<num && num<11){
        for(let i = 1; i < 11; i++){
            if(i = num){
                message.innerHTML = "Good job" ;
            }else{
                i++;
            }
        }

    }else{
        message.innerHTML = "The number is not between 1 and 10. Input valid number!"

    }
}