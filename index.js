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

$('.project1').hover(function () {
    $(this).css("opacity", "0.5");
    $('.p1').removeClass('text');
}, function () {
    $(this).css("opacity", "1");
    $('.p1').addClass('text');
});
//projectpic2
$('.project3').hover(function () {
    $(this).css("opacity", "0.5");
    $('.p3').removeClass('text');
}, function () {
    $(this).css("opacity", "1");
    $('.p3').addClass('text');
});

//projectpic3
$('.project2').hover(function () {
    $(this).css("opacity", "0.5");
    $('.p2').removeClass('text');
}, function () {
    $(this).css("opacity", "1");
    $('.p2').addClass('text');
});
 
//projectpic6
$('.project6').hover(function () {
    $(this).css("opacity", "0.5");
    $('.p6').removeClass('text');
}, function () {
    $(this).css("opacity", "1");
    $('.p6').addClass('text');
});
//projectpic8

$('.project8').hover(function () {
    $(this).css("opacity", "0.5");
    $('.p8').removeClass('text');
}, function () {
    $(this).css("opacity", "1");
    $('.p8').addClass('text');
});

//projectpic7

$('.project7').hover(function () {
    $(this).css("opacity", "0.5");
    $('.p7').removeClass('text');
}, function () {
    $(this).css("opacity", "1");
    $('.p7').addClass('text');
});

//projectpic5

$('.project5').hover(function () {
    $(this).css("opacity", "0.5");
    $('.p5').removeClass('text');
}, function () {
    $(this).css("opacity", "1");
    $('.p5').addClass('text');
});
$('.project4').hover(function () {
    $(this).css("opacity", "0.5");
    $('.p4').removeClass('text');
}, function () {
    $(this).css("opacity", "1");
    $('.p4').addClass('text');
});

