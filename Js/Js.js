$(function ()
{
    'use strict'


    //adjust the slider's height using Js
    var windowHeight = $(window).height(),
        NavHeight = $(".navbar").innerHeight(), // to get the height including padding and margin values
        UpperBar = $(".upper-bar").innerHeight();

    $(".slider .carousel-item , .overlay").height(windowHeight - (NavHeight + UpperBar));

    // active in nav bar
    $(".navbar .collapse ul li").on("click", function ()
    {
        $(this).addClass("active").siblings().removeClass("active");
    });


    // click to shuffle class
    $(".featured-work  ul > li").on("click",function ()
    {
        $(this).addClass("active").siblings().removeClass("active");
        if ($(this).data("class") === "all") {
            $(".images-container .col-md").css("opacity",1);
        } else {
            $(".images-container .col-md").css("opacity", .09);
            $($(this).data("class")).parent().css("opacity", 1);
            console.log($($(this).data("class")));
        }
    });
    
});