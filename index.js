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


var p1 = document.getElementById("page1");
var p2 = document.getElementById("page2");

var startingX;

function p1start(evt) {
    startingX = evt.touches[0].clientX;
};

function p1move(evt) {
    var touch = evt.touches[0].clientX;
    var change = startingX - touch.clientX;

    p1.style.left = '-' + change + 'px';
    p2.style.display = 'block';
    p2.style.left = (screen.width - change) + 'px';
    evt.preventDefault();
};

function p1end(evt) {
    var change = startingX - evt.changedTouches[0].clientX;
    var threshold = screen.width / 3;
    if (change < threshold) {
        p1.style.left = '0';
        p2.style.left = '100%';
        p2.style.display = 'none';
    } else {
        p1.style.transition = 'all .3s';
        p2.style.transition = 'all .3s';
        p2.style.left = '0';
        p1.style.left = '-100%';
        p2.style.display = 'block';
    }
};

function p2start(evt) {
    startingX = evt.touches[0].clientX;
    p1.style.transition = '';
    p2.style.transition = '';
    p1.style.display = 'none';
};

function p2move(evt) {
    var touch = evt.touches[0];
    var change = touch.clientX - startingX;
    if (change < 0) {
        return;
    }
    p1.style.display = 'block';
    p1.style.left = (change - screen.width) + 'px';
    p2.style.left = change + 'px';
    evt.preventDefault();
};

function p2end(evt) {
    var change = evt.changedTouches[0].clientX - startingX;
    var half = screen.width / 4;
    if (change < half) {
        $("#button").show("slow");
        p1.style.left = '-100%';
        p2.style.left = '0';
        p1.style.display = 'none';
    } else {
        p1.style.transition = 'all .3s'
        p2.style.transition = 'all .3s'
        p2.style.left = '100%';
        p1.style.left = '0';
    }
};