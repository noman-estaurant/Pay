$(document).ready(function() {
    var mySwiper = new Swiper(".swiper-container", {
        // Optional parameters
        direction: "horizontal",
        pagination: {},
        on: {
            // slideChangeTransitionStart: function() {
            //     if ((this.activeIndex) == 1) {
            //         $("#button").show("slow");
            //     }
            // },
        },
    });
});
$(".input-border input").keyup(function() {
    if (this.value.length == this.maxLength) {
        $(this).nextAll('input').first().focus();
        $(this).closest('div').next('div').find('input:text').focus();
        console.log("?");
    }
});


$(".button").click(function() {
    $(this).transition('fade', 300, function() {
        //pay add here

        $(".button").transition('fade', 0);
    })

});