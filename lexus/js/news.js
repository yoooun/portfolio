$(document).ready(function(){

  $('.news_cont .pic_list_wrap a').click(function(){
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

})
