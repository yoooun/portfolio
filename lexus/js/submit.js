$(document).ready(function(){
  //[시승신청]
  //표 전체 toggle
    $('.submit_1_cont ol li a').click(function(){
      $(this).next('ul').toggleClass('on')
    })
    //표 개인 정보 입력 toggle
      $('.submit_1_cont ol li a').click(function(){
        $(this).next('div').toggleClass('on')
      })
  //표 화살표 toggle arrow
    $('.submit_1_cont ol li a').click(function(){
      $(this).children('p').find('span.arrToggle_req').toggle()
    })
  //글자 색
  $('.submit_1_cont ol li a').click(function(){
    $(this).children().toggleClass('color0')
  })
  //라인 toggle line
    $('.submit_1_cont ol li a').click(function(){
      $(this).parent().children('span.lineToggle_pr').toggle()
    })
  //(1)btn 클릭
    $('ul.content-area em').click(function(){
      $(this).toggleClass('aft').removeClass('bef')
      console.log("aa")
    })
    //그 외 btn 클릭
      $('ul.emBtn em').click(function(){
        $(this).toggleClass('aft').removeClass('bef')
        console.log("aa")
      })
})
