// $(document).ready(function () {

//     if ($(window).width() >= 993) {
        
//         $('html, body, *').mousewheel(function (evt, delta) {
//             this.scrollLeft -= (delta);
//             evt.preventDefault();
//         });

        
//     }
// });

$(document).ready(function() {
    $('html, body, *').mousewheel(function(e, delta) {
    this.scrollLeft -= (delta);
    e.preventDefault();
    });
    });