
function myFunction(){

    let message = document.getElementById("message");

    let allMonth = ['January','February','March','April','May','June','July','August','September','October','November','December'];

    let month = document.getElementById("month").value;
    console.log(month);

    let year = document.getElementById("year").value;
    console.log(year);

    let monthName = new Date(month);
    const nameOfMonth = allMonth[monthName.getMonth()];
    console.log(nameOfMonth);

    const daysInMonth = new Date(year,month,0).getDate(); 
    console.log(daysInMonth);

    message.innerHTML = "The number of Days in " + nameOfMonth + " in the year " + year + " is " + daysInMonth;
    message.style.fontSize = "20px";


    
    



}