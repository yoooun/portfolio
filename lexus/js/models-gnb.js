$(function(){

  $('.depth-1-nav-wrapper').css('display','none')

  $('#models-gnb div li').mouseenter(function(){
    $(this).find('a').css({
      'color':'#fff',
      'font-weight':'900'
    }).parents('li').siblings().find('a').css('color','#444')
  })


  //
  // $('#depth-2-menu').toggle(
  //   function(){
  //     $('.depth-1-nav-wrapper').css({'display':'block',left:'-100%'}).animate({left:0})
  //     $('#models-gnb').css('left','180px');
  //   };
  //   function(){
  //     $('.depth-1-nav-wrapper').css({'display':'none',left:0}).animate({left:'-100%'})
  //     $('#models-gnb').css('left','0');
  //   };
  // )
  // $('.depth-2-menu').click(function(){
  //   $('.depth-1-nav-wrapper').toggle("slow",function(){
  //     $(this).animate({
  //       left:'100%'})
  //     $('#models-gnb').css('left','180px')
  //   })
  // })
  // $('.depth-2-menu').click(function(){
  //   $('.depth-1-nav-wrapper').toggle(function(){
  //     $(this).css('display','block')
  //   })
  //   $('#models-gnb').toggle(function(){
  //     $(this).css('left','180px')
  //   })
  // })
  // 끝
})
