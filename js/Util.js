$(document).ready(function () {

    $('#btn-search').click(function (e) { 
        console.log('ok');
        e.preventDefault();
        window.open("https://google.com/search?q=" + $('#input-search').val());
    });

    $('.js-tilt').tilt({
        scale: 1.2
    });

    jQuery('.responsive-text').fitText();


//    $('#side-popular > h4').mouseenter(function () { 
//     $(this).transition({
//         perspective: '100px',
//         rotateY: '180deg'
//     });
//    });
    
});

