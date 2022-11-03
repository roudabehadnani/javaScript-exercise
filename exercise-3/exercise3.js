
function myFunction(){

    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

    let message = document.getElementById("message");

    let date = document.getElementById("year").value;
    console.log(date);

    const event = new Date(date);

    //the day of the month
    let dayOfMonth = event.getDate();
    console.log(dayOfMonth);

    //the month of the year
    let month = event.getMonth(); 
    console.log(month);

    //the day of the week
    let dayWeek = event.getDay();
    console.log(dayWeek);
    
    const nameOfWeekDay = days[event.getDay()];

    if(month == 0 && dayOfMonth == 1){

        if(dayWeek == 0){
            message.innerHTML = "The first Day of January is :" + nameOfWeekDay ;
            message.style.color = "green";

        }else{
            message.innerHTML = "The first Day of January is : " + nameOfWeekDay + " !";
            message.style.color = "red";
        }

    }else{
        message.innerHTML = "The date is not the first of January!!!";
        message.style.color = "gray";
    }
}