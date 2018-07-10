$(function(){
    // All jQuery code goes here
    $('.navigation > li').hover(function() {
        // executes when hovering
        $(this).addClass('openSesame');
    }, function() {
        // executes when mouse leaves
        $(this).removeClass('openSesame');
    });

})
