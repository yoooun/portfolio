$(document).ready(function(){

  var idx = 0;
  $('.hover div').mouseenter(function(){
    var idx = $(this).index();
    $('.pic_ex span').eq(idx).css('display','block').siblings().css('display','none')
  });


  $('.model_3_nav_ex').on('click','li a',function(){
    var nav_ex = $(this).parent().index();
    shose(nav_ex);
    return false;
  });

  function shose(i){
    $('.model_3_view_ex').children('div').eq(i).addClass('pic_ex').siblings().removeClass('pic_ex')
  }


  $('.model_3_nav_in').on('click','li a',function(){
    var nav_in = $(this).parent().index();
    console.log('asdasd')
    imgChange(nav_in);
    return false;
  })
  function imgChange(i){
    $('.model_3_view_in').children('div').eq(i).addClass('pic_in').siblings().removeClass('pic_in')
  }

  $(function(){
           $("#models-gnb li a").click(function(event){ // li a를 클릭했을 때
              event.preventDefault(); //a의 넘어가려고 하는 특성을 막아주고 animate만 실행되게
              var thish = $(this.hash).offset().top;
              // $(this.hash) this(현재 클릭한 녀석)의 id값
              // .offset()의 좌표
              // 중의 .top; 탑값
              $('html,body').stop().animate({scrollTop:thish}, 1000);
              // $('html,body') 가 이동할 때
              // animate 실행
              // scrollTop 스크롤 탑 값을 :thish 만큼 이동
              // 1000의 duration(시간)동안
           });
        });

  $('.model_ls600h_4_sp dl dt a').click(function(){
    $(this).parent().next().toggleClass('on')
    console.log("@@@");

  })

  //   $('.model_ls600h_4_sp dl dt .arrow').children('span').eq(i).css({

  // function bgArrow(i){
  //   $('.model_ls600h_4_sp dl dt a').addClass('arrow_1').siblings().removeClass('arrow_1')
  //     console.log('aabb')
  // }

  $('.model_ls600h_4_sp dl dt a').click(function(){
    $(this).children().find('p').removeClass().addClass('arrow_1').css(
      'display','block').siblings().removeClass('arrow_1')
    console.log('asas')
  })

  // $('.model_ls600h_4_sp dl dt a').click(function(){
  //   $(this).children().find('p').toggleClass('arrow_1')
  //   console.log('qwer11')
  // })

});
