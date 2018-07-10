$(function(){
    // All jQuery code goes here
    //        $('.dropdownMenu > li').hover( function() {
    //            //mouseover0
    //            $(this).children("ul").slideDown(200);
    //        }, function() {
    //            $(this).children("ul").slideUp(200);
    //        });
    $('.dropdownMenu > li').hover(function() {
        $(this).children("ul").slideToggle(200);
    })

})
