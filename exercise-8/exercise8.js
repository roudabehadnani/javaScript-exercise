
function myFunction(){

    let input = document.getElementById("input").value;

    let message = document.getElementById("message");

    let string = input.toLowerCase()
                        .split("")
                        .sort()
                        .join("");

    
    message.innerHTML = "After orgonize : " + string;
    message.style.fontSize = "20px";
}