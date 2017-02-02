var elementPosition = $('#navigation').offset();

$(window).scroll(function(){
        if($(window).scrollTop() > elementPosition.top){
            $('#navigation').css({'position':'fixed','top':'0'});
            $('.bg1 h2').css({'margin-top':'232px'});
        } else {
            $('#navigation').css({'position':'static'});
            $('.bg1 h2').css({'margin-top':'100px'});
        }    
});