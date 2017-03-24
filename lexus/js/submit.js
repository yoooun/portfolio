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
      $(this).removeClass('bef').addClass('aft')
      console.log("aa")
    })
  //그 외 btn 클릭
    $('ul.emBtn li em').click(function(){
      $(this).toggleClass('aft')
      console.log("bb")
    })


    //표 다음으로 넘어가기
    //(1)선택한 표 접기
    // $('.submit_1_cont ol li ul li ul li.LS_btn').click(function(){
    //   var SeleTb = $(this).parent('ul').parent('li').parent('ul').removeClass('on')
    //   tableClose(SeleTb)
    // })
    //(1)선택된 표는 Close 다음 표는 Open
    // function tableClose(i){
    //   var cloOp = $('.submit_1_cont ol li').next('li').children('ul').addClass('on').siblings().removeClass('on')
    //   change(cloOp)
    // }
    // function change(i){
    //   $('.submit_1_cont ol li ul li ul li.LS_btn').click(function(){
        //선택된 표(close)
        //라인
        // $(this).parent('ul').parent('li').parent('ul').parent('li').children('span')
        // .removeClass('hline').addClass('line')
        //화살표
        // $(this).parent('ul').parent('li').parent('ul').parent('li').children('a').children('p')
        // .children('span').removeClass('arrow_2').siblings().css('display','block')
        // //글자색깔
        // $(this).parent('ul').parent('li').parent('ul').parent('li').children('a').find('cite')
        // .css('color','#bbb')
        // $(this).parent('ul').parent('li').parent('ul').parent('li').children('a').find('span')
        // .css('color','#bbb')

        //다음 표(open)
        //라인
        // $(this).parent('ul').parent('li').parent('ul').parent('li').next('li').children('span')
        // .removeClass('line').addClass('hline')
        //화살표
        // $(this).parent('ul').parent('li').parent('ul').parent('li').next('li').children('a').children('p')
        // .children('span').removeClass('arrow').siblings().css('display','block')
        //글자색깔
    //     $(this).parent('ul').parent('li').parent('ul').parent('li').next('li').children('a').children('cite')
    //     .css('color','#000')
    //     $(this).parent('ul').parent('li').parent('ul').parent('li').next('li').children('a').children('cite').find('span')
    //     .css('color','#000')
    //   })
    // }


    //(2)선택한 표 접기
    // $('.submit_1_cont ol li ul li.LS_btn').click(function(){
    //   var SeleTb_2 = $(this).parent('ul').removeClass('on')
    //   tableClose_2(SeleTb_2)
    // })
    // function tableClose_2(i){
    //   $('.submit_1_cont ol li').siblings('li.Thr').children('ul').addClass('on').siblings().removeClass('on')
    //
    //   console.log('123')
    // }


    //표 다음으로 넘어가기
    //(1)선택한 표 접기
    // $('.submit_1_cont ol li ul li ul li.LS_btn').click(function(){
    //   var SeleTb = $(this).parent('ul').parent('li').parent('ul').removeClass('on')
    //   tableClose(SeleTb)
      // console.log('11')
    // })
    //(1)선택된 표는 Close 다음 표는 Open
    // function tableClose(i){
    //   var cloOp = $('.submit_1_cont ol li').next('li').children('ul').addClass('on').siblings().removeClass('on')
    //   change(cloOp)
    // }




})
