// ここからハンバーガーメニュー-------------------------------
$(function () {
  $('.hamburger__button').click(function (e) {
    e.preventDefault()
    $(this).toggleClass("active");
    $('.hamburger__container').toggleClass('active');
    // toggleClassはJSでいう"classList.add()"
    if ($('.hamburger__container').hasClass("active")) {
      $('.hamburger__fadeout-layer').fadeIn(1000);
    } else {
      $('.hamburger__fadeout-layer').fadeOut(500);
    }
  });

  $('.hamburger__item').click(function () {
    $(this).removeClass("active");
    $('.hamburger__button').removeClass('active');
    $('.hamburger__container').removeClass('active');
    if ($('.hamburger__container').hasClass("active")) {
      $('.hamburger__fadeout-layer').fadeIn(1000);
    }
    else {
      $('.hamburger__fadeout-layer').fadeOut(500);
    }
  });
});
// ここまでハンバーガーメニュー-------------------------------


// ここからハンバーガーメニューの三本線の色変更----------------------------------------------------------
// メインビューは写真が背景なので三本線は白
// →　スクロールして写真領域を出たら三本線に色をつける

function changeHamburgerColor() {
  var changeTrigger = document.getElementById('js-hamburger__colorChange');
  // ここから○○（数字）でクラス名を付与する、の基準になる場所
  var hamburgerButton = document.getElementById('hamburger__button');
  // クラス名をつけたい対象の要素が持っているidを指定

  if (!changeTrigger || !hamburgerButton) return;
  // ||はor演算子→上記の場合だとchangeTriggerがない場合またはhamburgerがない場合

  var triggerClientRect = changeTrigger.getBoundingClientRect();

  if (triggerClientRect.bottom < 60) {
    hamburgerButton.classList.add('changeColor');
  } else {
    if (hamburgerButton.classList.contains('changeColor')) {
      hamburgerButton.classList.remove('changeColor');
    }
  }
}
window.addEventListener('scroll', changeHamburgerColor);
// ここまでハンバーガーメニューの色変更----------------------------------------------------------