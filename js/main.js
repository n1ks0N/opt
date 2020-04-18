$(document).ready(function() {

    // change header when body.scrollTop > section.main

    $(window).scroll(function() {
        const mainHeight = $('.main').height();
        let headerChangeHeight = mainHeight - 64; // minus header.height
        if ($('body, html').scrollTop() >= headerChangeHeight) {
            $('header').addClass('headerScroll');
        } else {
            $('header').removeClass('headerScroll');
        }
    });

    $(function() {
        $('.menu-header__link_color').on('click', function() {
            $('html, body').animate({
                scrollTop: $('#top').offset().top
            }, 600);
        });
    });
});