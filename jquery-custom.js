$(document).ready(function () {

    if ($(window).width() >= 993) {
        $('html, body, *').mousewheel(function (e, delta) {
            this.scrollLeft -= (delta);
            e.preventDefault();
        });
    }

});