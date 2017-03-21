$(function(){
    function motion(start, end, i){
        $('.con_cont_2 li').eq(i).addClass('on').find('div').css({
            left:start,
            'display':'block'
        }).stop().animate({
            left:end
        }).parent().siblings().removeClass().find('div')

        if(idx == $('.con_cont_2 li').length){
            idx = 0
            motion('100%',0,idx);
        }else if( idx < 0){
            idx = $('.con_cont_2 li').length-1;
            motion('-100%',0,idx);
        }
    }


    $('.slide_arrow a.next').click(function(){
      $(this).children('div').children('img')
        idx = $('.con_cont_2 li.on').index();
        motion(0,'-100%',idx)
        idx ++
        motion('100%',0,idx)
    })

    $('.slide_arrow a.prev').click(function(){
      $(this).children('div').children('img')
        idx = $('.con_cont_2 li.on').index();
        motion(0,'100%',idx)
        idx --
        motion('-100%',0,idx)
    })

    $('.slide_bttom_btn li a').click(function(e){
        e.preventDefault();
        var hisnum = $('.on').index();
        idx = $(this).parent().index();
        $(this).parent().addClass('on').siblings().removeClass('on')

        if(idx > hisnum){
            motion('0', '-100%', hisnum);
            motion('100%', '0', idx);
            motion1('0','100%', hisnum);
            motion1('-100%','0', idx);
        }else if(idx < hisnum){
            motion('0', '100%', hisnum);
            motion('-100%', '0', idx);
            motion1('0','-100%', hisnum);
            motion1('100%','0', idx);
        }else{
            return
        }

    });
});
