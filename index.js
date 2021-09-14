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

   // toggle images to get details
   $(".design").click(function () {
    $("#design-img, #design-description").toggle();
})

//development
$(".devolop").click(function () {
    $("#dev-image, #developmentdetails").toggle();
})

//product
$(".product").click(function () {
    $("#product-image, #productdetails").toggle();
})

//adding hover effect

