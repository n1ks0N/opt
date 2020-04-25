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

        // section animate

        let cards = headerChangeHeight - 400;
        if ($('body, html').scrollTop() >= cards) {
            $('.cards').addClass('opacity');
        }

        let advantages = headerChangeHeight + 400;
        if ($('body, html').scrollTop() >= advantages) {
            $('.advantages-content').addClass('opacity');
        }

        let delivery = advantages + 900;
        if ($('body, html').scrollTop() >= delivery) {
            $('.delivery-main').addClass('opacity');
        }
    });

    // background advantages animate

    $('.advantages').on('mousemove', function(e) {
        let amountMovedX = 80 * ((e.pageX + 1) / $(document).width() - 0);
        let amountMovedY = 80 * ((e.pageY + 1) / $(window).height()) - 130;
        $('.advantages').css('background-position', amountMovedX + 'px ' + amountMovedY + 'px');
    });
});