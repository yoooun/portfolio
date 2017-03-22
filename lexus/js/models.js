$(document).ready(function(){


//디자인 자동차 회전
  var idx = 0;
  $('.hover div').mouseenter(function(){
    var idx = $(this).index();
    $('.pic_ex span').eq(idx).css('display','block').siblings().css('display','none')
  });

//디자인_자동차 색 바뀜
  $('.model_3_nav_ex').on('click','li a',function(){
    var nav_ex = $(this).parent().index();
    shose(nav_ex);
    return false;
  });

  function shose(i){
    $('.model_3_view_ex').children('div').eq(i).addClass('pic_ex').siblings().removeClass('pic_ex')
  }

//디자인_자동차내부 바뀜
  $('.model_3_nav_in').on('click','li a',function(){
    var nav_in = $(this).parent().index();
    console.log('asdasd')
    imgChange(nav_in);
    return false;
  })
  function imgChange(i){
    $('.model_3_view_in').children('div').eq(i).addClass('pic_in').siblings().removeClass('pic_in')
  }

//윙배너
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

// 스펙/사양 표 전체 toggle
  $('.model_ls600h_4_sp dl dt a').click(function(){
    $(this).parent().next().toggleClass('on')
  })

  $('#models4 .model_ls600h_4_sp dl dt a').click(function(){
    $(this).parent().next('dd.first_con_m4').toggleClass('off').removeClass('on')
  })
//[스펙/사양] 표 화살표 toggle arrow
  $('.model_ls600h_4_sp dl dt a').click(function(){
    $(this).find('p.arrToggle').toggle();
   })
//[스펙/사양] 표 라인 toggle line
   $('.model_ls600h_4_sp dl dt a').click(function(){
     $(this).parent().children('span.lineToggle').toggle();
    })

//[차량가격] 표 전체 toggle
  $('.model_ls600h_5_cont_price ol li a').click(function(){
    $(this).next().toggleClass('off')
  })
//[차량가격] 표 화살표 toggle arrow
  $('.model_ls600h_5_cont_price ol li a').click(function(){
    $(this).find('p').children('.arrToggle_pr').toggle()
  })
//[차량가격] 표 라인 toggle line
  $('.model_ls600h_5_cont_price ol li a').click(function(){
    $(this).parent().children('span.lineToggle_pr').toggle()
  })
//글자 색
  $('.model_ls600h_5_cont_price ol li a').click(function(){
    $(this).children('cite').toggleClass('color0')
  })

//[시승신청]
//표 전체 toggle
  $('.model_ls600h_6_cont_req ol li a').click(function(){
    $(this).next().toggleClass('on')
  })
//표 화살표 toggle arrow
  $('.model_ls600h_6_cont_req ol li a').click(function(){
    $(this).children('p').find('span.arrToggle_req').toggle()
  })
//글자 색
$('.model_ls600h_6_cont_req ol li a').click(function(){
  $(this).children().toggleClass('color0')
})
//라인 toggle line
  $('.model_ls600h_6_cont_req ol li a').click(function(){
    $(this).parent().children('span.lineToggle_pr').toggle()
  })


  //count
  $('.model_ls600h_5_cont_price li input.count-1').click(function(){
    console.log("1");
    $('.checkzone .count-1').css('display','block').prop('Counter',0).animate({
      Counter:$(this).text()
    },{
      duration : 4000,
      easing:'swing',
      step:function(now){
        $(this).text(Math.ceil(now));
      }
    })
  })
  $('.model_ls600h_5_cont_price li input.count-2').click(function(){
    console.log("22");
    $('.checkzone .count-2').css('display','block').prop('Counter',0).animate({
      Counter:$(this).text()
    },{
      duration : 4000,
      easing:'swing',
      step:function(now){
        $(this).text(Math.ceil(now));
      }
    })
  })
  //
  // $('span.1').click(function(){
  //       console.log("111");
  //       $(this).prop('Counter',0).animate({
  //         Counter : $(this).text()
  //       },{
  //         duration:4000,
  //         easing : 'swing',
  //         step:function(now){
  //           $(this).text(Math.ceil(now));
  //         }
  //       })
  //     })
//   $('.count').each(function () {
// $(this).prop('Counter',0).animate({
//    Counter: $(this).text()
// }, {
//    duration: 4000,
//    easing: 'swing',
//    step: function (now) {
//        $(this).text(Math.ceil(now));
//    }
// });
// });


});
