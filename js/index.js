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




// ここからスクロールボタンのフェードイン・フェードイン---------------------------------
function hiddenScrollButton() {
  var trigger = document.getElementById('js-scrollDown__fadeout');
  var scrollButton = document.getElementById('scrolldown-button');

  if (!scrollButton || !trigger) return;

  var triggerClientRect = trigger.getBoundingClientRect();
  // ターゲット要素の位置を、ブラウザ表示領域の左上を(0,0)として、そこからの相対位置で示す
  if (triggerClientRect.top < 0) {
    scrollButton.classList.remove('header__scrolldown__fadein');
    scrollButton.classList.add('header__scrolldown__fadeout');
  } else {
    if (scrollButton.classList.contains('header__scrolldown__fadeout')) {
      scrollButton.classList.remove('header__scrolldown__fadeout');
      scrollButton.classList.add('header__scrolldown__fadein');
    }
  }
}
window.addEventListener('scroll', hiddenScrollButton);
// ここまでスクロールボタンのフェードイン・フェードイン---------------------------------



// ここからスクロールに合わせてナビゲーションバー固定の切り替え---------------------------
function fixedGlobalNav() {
  var trigger = document.getElementById('js-trigger');
  var globalNav = document.getElementById('js-global-nav');

  if (!globalNav || !trigger) return;

  var triggerClientRect = trigger.getBoundingClientRect();
  // ターゲット要素の位置を、ブラウザ表示領域の左上を(0,0)として、そこからの相対位置で示す

  if (triggerClientRect.top < 0) {
    globalNav.classList.add('is-fixed-nav');
  } else {
    globalNav.classList.remove('is-fixed-nav');
  }
}
window.addEventListener('scroll', fixedGlobalNav);
// これで作ったfixedGlobalNav()という関数をscrollに合わせて実行する
// ここまでスクロールに合わせてナビゲーションバー固定の切り替え---------------------------