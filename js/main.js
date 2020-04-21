$(document).ready(function() {

    // change header when body.scrollTop > section.main

    $(window).scroll(function() {
        const mainHeight = $('.main').height();
        let headerChangeHeight = mainHeight - 64; // minus header.height
        if ($('body, html').scrollTop() >= headerChangeHeight) {
            $('header').addClass('headerScroll');
            $('.cards').css('opacity', '1');
        } else {
            $('header').removeClass('headerScroll');
        }
        if (($(window).width() > 480) && ($('body, html').scrollTop() >= headerChangeHeight)) {
            $('.up').css('display', 'block');
        } else {
            $('.up').css('display', 'none');
        }

        let cards = headerChangeHeight - 400;
        if ($('body, html').scrollTop() >= cards) {
            $('.cards').addClass('opacity');
        }

        let advantages = headerChangeHeight + 400;
        if ($('body, html').scrollTop() >= advantages) {
            $('.advantages-content').addClass('opacity');
        }
    });
});