$(function(){
    // jQuery Code goes here
    var box1 = $('.box1');
    var box2 = $('.box2');

    function LeftToRight() {
        if (box2.html() == '') {
            // get from 1, put into 2
            // empty out box1
            box2.html( box1.html() );
            box1.html( '' );
        }
    }

    function RightToLeft() {
        if (box1.html() == '') {
            box1.html( box2.html() );
            box2.html( '' );
        }
    }

    $( '#LeftToRight').click( LeftToRight );
    $( '#RightToLeft').click( RightToLeft );

})
})
