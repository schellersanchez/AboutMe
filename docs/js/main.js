$(function(){
    //cache the window object
    var $window = $(window);
    
    //paralax background effect
    $('section[data-type="background"]').each(function(){
        var $bgobj = $(this);

        $(window).scroll(function(){
            //scroll bg at var speed
            //the yPos is a negative val because scrolling it up

            var yPos = -($window.scrollTop()/$bgobj.data('speed'));

            //put together final bg position
            var coords ='50% ' + yPos + 'px';

            //move bg object
            $bgobj.css({backgroundPosition: coords});
        });

    });
});