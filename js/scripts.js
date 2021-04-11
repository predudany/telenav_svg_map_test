jQuery(document).ready(function ($) {

    // set active tab upon clicking

    // Get the selector for tabs
    var tabTrigger = $(".tab-bar ul li");

    tabTrigger.on('click', function () {

        // get the destination tab content, to be opened
        var tabTarget = $(this).attr('data-tab');

        // check if the tab we clicked is already open. if so, close it
        if ($(this).hasClass("active")) {
            $('.tab-contents').removeClass('open');
            $(this).removeClass('active');
            $('.tab-content').removeClass('active');
        }

        // else open it and close the others, if there are others opened
        else {
            $(tabTrigger).not(this).removeClass('active');
            $(this).addClass('active');
            $('.tab-contents').addClass('open');

            $('.tab-content').removeClass('active');
            $(tabTarget).addClass('active');
        }

    });

    // close the tab-contents in case we click on a bottom tab
    $('.tab-bar-bottom li').on('click', function () {
        $('.tab-contents').removeClass('open');
        $('.tab-content').removeClass('active');
    });

    // javascript code to be included below this line

    $('.name.land').click(function () {
        $('#land').toggle();
    })
    $('.name.all-road').click(function () {
        $('#major, #minor').toggle();
    })
    $('.name.main-road').click(function () {
        $('#major').toggle();
    })
    $('.name.sec-road').click(function () {
        $('#minor').toggle();
    })
    $('.name.water').click(function () {
        $('#water').toggle();
    })
    $('.name.park').click(function () {
        $('#park').toggle();
    })
    $('.name.industrial').click(function () {
        $('#industrial').toggle();
    })


    // change night mode toggle
    $('.dark-btn').on('click', function () {
        $('.svgmap').toggleClass('dark');
    });
});

// eof