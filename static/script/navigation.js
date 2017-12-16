/**
 * Created by dsm2017 on 2017-07-23.
 */
$(function () {
    
    //스크롤을 움직일때 높이에 따른 상단바 고정여부
    $(window).scroll(function (event) {
        var headerHeight = $('header').height();
        if($(document).scrollTop()>=headerHeight) {
            $('nav').addClass('stickynav');
            $('#home').fadeIn("slow");
            $("#header").css("margin-bottom","40px");
        } else {
            $('nav').removeClass('stickynav');
            $('#home').fadeOut("slow");
            $("#header").css("margin-bottom","0");
        }
    });
    
    //문제를 클릭했을때 colorbox표시
    $('.main .pnt').click(function() {
        //문제 div가 없으면
        if($(this).next().length == 0){
            alert("아직 이 문제를 볼 수 없습니다!");
            return;
        }
        $('.colorbox-background').fadeIn("fast");
        $(this).next().fadeIn("fast");
    });
    
    //colorbox가 표시중일때 colorbox-background를 클릭하면 탈출
    $('.colorbox-background').click(function() {
        $('.colorbox-background').fadeOut("fast");
        $('.colorbox').fadeOut("fast");
    });
    
})

//상단바에서 링크를 클릭했을때 해당태그로 부드럽게 이동
function movescroll(elmnt) {
    var theway = elmnt.text();
    var offset  = $("#" + theway).offset();
    $('html, body').animate({scrollTop : offset.top}, 1000);
}