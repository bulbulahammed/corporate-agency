$(function () {
    "use strict";

    //header slider js
    $('.slider_img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: true,
        autoplaySpeed: 2000,
        infinite: true,
        arrows: true,
        prevArrow: '.slidPrv',
        nextArrow: '.slidNext',
        speed: 1000,
        fade: true,
        cssEase: 'linear'
    });

    //counter up
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });

    //pricing table
    var e = document.getElementById("filt-monthly"),
        d = document.getElementById("filt-hourly"),
        t = document.getElementById("switcher"),
        m = document.getElementById("monthly"),
        y = document.getElementById("hourly");

    e.addEventListener("click", function () {
        t.checked = false;
        e.classList.add("toggler--is-active");
        d.classList.remove("toggler--is-active");
        m.classList.remove("hide");
        y.classList.add("hide");
    });

    d.addEventListener("click", function () {
        t.checked = true;
        d.classList.add("toggler--is-active");
        e.classList.remove("toggler--is-active");
        m.classList.add("hide");
        y.classList.remove("hide");
    });

    t.addEventListener("click", function () {
        d.classList.toggle("toggler--is-active");
        e.classList.toggle("toggler--is-active");
        m.classList.toggle("hide");
        y.classList.toggle("hide");
    })


})
