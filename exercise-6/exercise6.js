
function myFunction(){

    let inputData = document.getElementById("input").value;
    
    let message = document.getElementById("message");

    let reverseNum = inputData.split('')
                            .reverse()
                            .join('');

    console.log(reverseNum); 
    
    message.innerHTML = "Thr result is : " + reverseNum;
    message.style.fontWeight = "bold";
  
 }