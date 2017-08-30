function sendMsg() {
    alert("Confirm sending message")
}

var submitButton = document.querySelector("#msgBtn");
var errorMessage = document.querySelector(".error-message");
var successMessage = document.querySelector(".success-message");
var inputEmail = document.getElementById("inputEmail");
var inputText = document.getElementById("inputText");
var messageArray = [];

submitButton.addEventListener("click",function(e){
    if(inputEmail.value.indexOf("@")==-1){
        messageArray.push("<p>The email must have a '@'</p>");
    }
    if(inputText.value.length<4){
        messageArray.push("<p>Your message is too short</p>");
    }
    if(messageArray.length >0){
        e.preventDefault();
        for(var i = 0; i<messageArray.length;i++){
            errorMessage.innerHTML += messageArray[i];
        }
    } else {
        successMessage.innerHTML="Message sent";
  }

});
