
function myFunction(){

    let message = document.getElementById("message");
    let  workDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

    let splitArray = workDays.join();
    console.log(splitArray);
    message.innerHTML = "The result is: " + splitArray;
    message.style.fontSize = "20px";

}