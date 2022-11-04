
function myFunction(){

    let totalMinute = document.getElementById("minute").value;

    let message = document.getElementById("message");

    let minute = totalMinute % 60;
    let hour = (totalMinute - minute) / 60;

    message.innerHTML = hour + " hours and " + minute + " minutes.";
}