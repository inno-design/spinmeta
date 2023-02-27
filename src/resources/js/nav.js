const navToggle = function (){
  document.querySelector('.header_nav').classList.toggle('open');
}

$(document).ready(function() {
  const $btn = $('.btn_subnav');

  $btn.each(function(){
    const $target = $(this);
    $(this).on('click',function(){
      $('.gnb_main').find('.gnb_main_item').removeClass('open');
      $target.parent('.gnb_main_item').addClass('open')
    });
  });
});