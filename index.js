// form validation
document.getElementById('submit').addEventListener('click', function () {
    var myName = $("#namebar").val();
    var myMail = $("#emailbar").val();
    var myMessage = $("#messagebar").val();
    if ($("#namebar").val() && $("#emailbar").val() && $("#messagebar").val()) {
        alert("Hello there  " + myName + ",thank you for contacting us,we will contact you soon:)");
    } else {
        alert("Please fill all !");
    }
})



