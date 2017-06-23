$(function () {
    $(document).ready(function () {
        //        $(".header-nav .container").sticky({
        //            zIndex: 99999,
        //            center: true,
        //            widthFromWrapper: false
        //        });
        $("a.skroll").click(function () {
            $("html, body").animate({
                scrollTop: $($(this).attr("href")).offset().top + "px"
            }, {
                duration: 500,
                easing: "swing"
            });
            return false;
        });
    });
});
