

function checkLeapYear(){

    let year = document.getElementById("year").value;
    let message = document.getElementById("message");

    console.log(year);

    if((0 == year % 4) && (0 != year % 100) || (0 == year % 400)){
        console.log(year + "is leap year")

        message.innerHTML = "Year is Leap";
        message.style.color = "green";

    }else{
        console.log(year + "not leap year")

        message.innerHTML = "Year is not Leap";
        message.style.color = "blue";
    } 
     
}


