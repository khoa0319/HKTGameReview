$(function(){
    hieuungload = new TimelineMax();
    hieuungload.from($('.loading'), 1, {opacity:1})

    .to($('.khoiload h1'), 0.5, {y:-20})
    .to($('.khoiload h1'), 0.5, {y:0})
    .to($('.khoiload h1'), 0.5, {y:-20})
    .to($('.khoiload h1'), 0.5, {y:0})
    .to($('.khoiload h1'), 0.5, {y:-20})
    .to($('.khoiload h1'), 0.5, {y:0})    
    
    // .to($('.khoiload h1'), 1, {y:-50})
    // .to($('.khoiload h1'), 1, {y:0})

    // .to($('.khoiload h3'), 1, {x:-2000})
    // .to($('.khoiload p'), 1, {x:2000})

    // .to($('.khoiload h1'), 1, {scale:1})
    // .to($('.khoiload h1'), 1, {scale:0.3})
    // .to($('.khoiload h1'), 1, {scale:1})
    // .to($('.khoiload h1'), 1, {scale:0.3})
    // .to($('.khoiload h1'), 1, {scale:1})
    // .to($('.khoiload h1'), 1, {scale:0.3})
    // .to($('.khoiload h1'), 1, {scale:1})
    // .to($('.khoiload h1'), 1, {scale:0.3})
    
    //ket thuc
    .to($('.loading'), 1, {y:-2200, ease:Power1.easeOut})    

});