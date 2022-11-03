
function dayCounter(){

    let message = document.getElementById("message");
    let now = new Date();

    let christmasYear = now.getFullYear();

    if (now.getMonth() == 11 && now.getDate() > 25) {
        christmasYear = christmasYear + 1;
    }

    let christmasDate = new Date(christmasYear, 11, 25);
    let dayMilliseconds = 1000 * 60 * 60 * 24;

    let remainingDays = Math.ceil(
        (christmasDate.getTime() - now.getTime()) /
         (dayMilliseconds));
     
    message.innerHTML = "There are " + remainingDays + " days remaining until Christmas."; 
    message.style.color = "blue";




}
