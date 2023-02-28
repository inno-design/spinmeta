$(function() {
  const menu = $('.side_position .item');
  const contents = $('.container_main > section');

  menu.click(function(){
    // e.preventDefault();

    let tg = $($(this).attr('href')).position().top;
    $('html, body').stop().animate({scrollTop: tg },500);

    // $('.side_position .item').removeClass('current');
    // $(this).addClass('current');
    return false;
  });

  //스크롤의 위치에 따라서 버튼 색상적용
  $(window).scroll(function(){
    const sct = $(window).scrollTop();
    contents.each(function(){
      let tg = $(this)
      let i = tg.index();
      if(tg.offset().top <= sct){//현재 해당되는 contents가 대상인지 여부 확인
        menu.removeClass('current');
        menu.eq(i).addClass('current');
      }
    });
  });
});