// $(document).ready(function ($) {


// }(jQuery));

$('#instructor .owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    timeout: 1000,
    speed: 300,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 2
        }
    }
});

$('#customer-review .owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    timeout: 1000,
    speed: 300,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})