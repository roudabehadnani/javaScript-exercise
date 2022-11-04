
function myFunction(){

    let year = document.getElementById("year").value;
    console.log(year);

    let message = document.getElementById("message");

    let today = new Date().getFullYear();
    console.log(today);

    let age = today - year;
    console.log(age);

    message.innerHTML = "The age is : " + age;
    message.style.fontWeight = "bold";


}