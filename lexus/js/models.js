$(document).ready(function(){

//
  $('.model_ls600h_1_1 .btn-next-arr').on('click',function(){
      $('html,body').animate({scrollTop:'0'+'950px'},930);
      console.log('123')
  });
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
//표 다음으로 넘어가기
  $('.model_ls600h_6_cont_req ol li em').click(function(){
    $(this).parent('label').parent('p').parent('li').parent('ul').parent('li').next('li').addclass('disblo').siblings().removeClass('disblo')
    console.log('asas')
  })


  //count

  var idx
  $('.model_ls600h_5_cont_price em').click(function(){
     idx= $(this).parents('li').index();
    console.log("em idx : "+ idx);
    $('.checkzone dl dd p span').eq(idx).css('display','block').siblings().css('display','none')
     console.log("22");
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

//section6_btn 클릭
  $('.model_ls600h_6_cont_req ul li em').click(function(){
    $(this).toggleClass('aft')
    console.log("aa")
  })


  $('.model_ls600h_5_cont_price em').click(function(){
    $(this).toggleClass('aft')
    console.log("aa")
  })



  //페럴렉스

  $(document).ready(function(){
  	$('.lsbg_1').parallax("50%", 0);
    $('.lstext_1 h3').parallax("50%", 0.2);
    $('.lstext_1 strong').parallax("50%", 0.2);
    $('.lstext_1 p').parallax("50%", 0.2);

    $('.lstext_2 h4').parallax("80%", 0.002);
    $('.lstext_2 p').parallax("30%", 20);

    $('.lstext_3 h4').parallax("50%", 0.2);
    $('.lstext_3 p').parallax("50%", 0.2);

    $('.lstext_4 h4').parallax("50%", 0.4);
    $('.lstext_4 p').parallax("50%", 0.2);




    // $('.lsbg_2').parallax("10%", 0.5);
    // $('.lsbg_3').parallax("10%", 0.5);
    // $('.lsbg_4').parallax("10%", 0.5);
    // $('.lsbg_5').parallax("10%", 0.5);
  })

  $(function(){

    $(window).scroll(function(){
        var st = $(window).scrollTop();
        // 모델 페이지
        // lsbg_1 부분
        if(st > 100 ){
          $('.model_ls600h_1 h3').css('opacity', '0')
      }else if(st <= 100 ){
          $('.model_ls600h_1 h3').css('opacity', '1')
        }

        if(st > 100 ){
          $('.model_ls600h_1 strong').css('opacity', '0')
      }else if(st <= 100 ){
          $('.model_ls600h_1 strong').css('opacity', '1')
        }

        if(st > 100 ){
          $('.model_ls600h_1 lstext_1 p').css('opacity', '0')
      }else if(st <= 100 ){
          $('.model_ls600h_1 lstext_1 p').css('opacity', '1')
        }

        // lsbg_2 부분
        if(st > 800 ){
          $('.lstext_2 h4').css('opacity', '0')
      }else if(st <= 800 ){
          $('.lstext_2 h4').css('opacity', '1')
        }

        if(st > 800 ){
          $('.lstext_2 p').css('opacity', '0')
      }else if(st <= 800 ){
          $('.lstext_2 p').css('opacity', '1')
        }

        // lsbg_3 부분
        if(st > 1700 ){
          $('.lstext_3 h4').css('opacity', '0')
      }else if(st <= 1700 ){
          $('.lstext_3 h4').css('opacity', '1')
        }

        if(st > 1700 ){
          $('.lstext_3 p').css('opacity', '0')
      }else if(st <= 1700 ){
          $('.lstext_3 p').css('opacity', '1')
        }

        // lsbg_4 부분
        if(st > 2400 ){
          $('.lstext_4 h4').css('opacity', '0')
      }else if(st <= 2400 ){
          $('.lstext_4 h4').css('opacity', '1')
        }

        if(st > 2400 ){
          $('.lstext_4 p').css('opacity', '0')
      }else if(st <= 2400 ){
          $('.lstext_4 p').css('opacity', '1')
        }




    });

})

  //팝업
  $('.model_ls600h_2_content ul li a span').click(function(){
        $('.blind').css({
          "display":"block"
        });
        $('.popup_wrap').css({
          "display":"block"
        });

        $('.close_btn').click(function(){
          $('.blind').css({
            "display":"none"
          });
          $('.popup_wrap').css({
            "display":"none"
          });
    });

    });

    var idx=0;


    function motion3(start, end, i){
        $('.slide li').eq(i).addClass('on').css({
            left:start,
            'display':'block'
        }).stop().animate({
            left:end
        }).siblings().removeClass('on').css('display','none');

        if(idx == $('.slide li').length){
            idx = 0
            motion3('100%',0,idx);
        }else if( idx < 0){
            idx = $('.slide li').length-1;
            motion3('-100%',0,idx);
        }
    }
    $('.slide li').eq(0).css('display','block');

    $('.popup_btn a.next').click(function(){
        idx = $('.slide li.on').index();
        motion3(0,'-100%',idx)
        idx ++
        motion3('100%',0,idx)
    })

    $('.popup_btn a.prev').click(function(){
        idx = $('.slide li.on').index();
        motion3(0,'100%',idx)
        idx --
        motion3('-100%',0,idx)
    })










});
