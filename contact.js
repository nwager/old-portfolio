window.onload = function () {
    document.getElementById("emaildiv").addEventListener("click", sendEmail);
}


function sendEmail () 
{

    var sendMessage = document.getElementById("message").value;
    var sendSubject = document.getElementById("subject").value;
    console.log(sendSubject, sendMessage);

    document.location.href = "mailto:noahwager+portfolio@gmail.com?subject="
        + encodeURIComponent(sendSubject)
        + "&body=" + encodeURIComponent(sendMessage);
}