$(document).ready(function(){


  //[차량가격] 표 전체 toggle
    $('.submit_1_cont ol li a').click(function(){
      $(this).next().toggleClass('off')
    })
  //[차량가격] 표 화살표 toggle arrow
    $('.submit_1_cont ol li a').click(function(){
      $(this).find('p').children('.arrToggle_pr').toggle()
    })
  //[차량가격] 표 라인 toggle line
    $('.submit_1_cont ol li a').click(function(){
      $(this).parent().children('span.lineToggle_pr').toggle()
    })
  //글자 색
    $('.submit_1_cont ol li a').click(function(){
      $(this).children('cite').toggleClass('color0')
    })

});
