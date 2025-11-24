$(document).ready(function () {

    $('.main-slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    });

    $('.product-slider').slick({
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: $('.slick-prev-arrow'),
        nextArrow: $('.slick-next-arrow'),
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    var countdownDate = new Date();
    countdownDate.setDate(countdownDate.getDate() + 4);

    var x = setInterval(function () {

        var now = new Date().getTime();

        var distance = countdownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        function addLeadingZero(num) {
            return (num < 10) ? "0" + num : num;
        }

        $('#days').text(addLeadingZero(days));
        $('#hours').text(addLeadingZero(hours));
        $('#minutes').text(addLeadingZero(minutes));
        $('#seconds').text(addLeadingZero(seconds));

        if (distance < 0) {
            clearInterval(x);
            $('.countdown-timer').html("<div class='time'>SALE ENDED</div>");
        }
    }, 1000);

    $('.category-slider').slick({
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: $('.category-prev-arrow'),
        nextArrow: $('.category-next-arrow'),
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });

    var commonSliderOptions = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    };

    $('.top-product-slider').slick({
        ...commonSliderOptions,
        asNavFor: '.bottom-product-slider'
    });

    $('.bottom-product-slider').slick({
        ...commonSliderOptions,
        asNavFor: '.top-product-slider'
    });

    $('.explore-next-arrow').click(function () {
        $('.top-product-slider').slick('slickNext');
    });

    $('.explore-prev-arrow').click(function () {
        $('.top-product-slider').slick('slickPrev');
    });

});