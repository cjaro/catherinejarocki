$(document).ready(function() {
    $("#card-header-about-me").click(function() {
        $("#plus-minus").fadeOut(100, function() {
            $("#plus-minus").text(($("#plus-minus").text() == 'About Me ++') ? 'About Me --' : 'About Me ++').fadeIn(100);
        })
    })
});