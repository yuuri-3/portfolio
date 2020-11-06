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




// ここからスクロールボタンのフェードイン・フェードイン----------------------------------------------------------

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

// ここまでスクロールボタンのフェードイン・フェードイン----------------------------------------------------------




// ここからスクロールに合わせてナビゲーションバー固定の切り替え----------------------------------------------------------

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
// ここまでスクロールに合わせてナビゲーションバー固定の切り替え----------------------------------------------------------



// ここからSwiperの設定----------------------------------------------------------

document.addEventListener('DOMContentLoaded', function () {
  var prams = {
    loop: false,
    speed: 1200,
    slidesPerView: 'auto',
    spaceBetween: 30,
    slidesPerGroup: 1,
    grabCursor: true,
    centeredSlides: false,
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true,
    // },
  };
  var mySwiper = new Swiper('.swiper-container', prams);
});
// ここまでSwiperの設定----------------------------------------------------------


// ここからPersonalityのアイコンフェードイン----------------------------------------------------------

$(window).on('load scroll', function () {
  $(".personality__box").each(function () {
    var winScroll = $(window).scrollTop();
    var winHeight = $(window).height();
    var scrollPos = winScroll + (winHeight * 0.8);
    if ($(this).offset().top < scrollPos) {
      $(this).css({ opacity: 1, transform: 'translate(0, 0)' });
    }
  });
});
// ここまでPersonalityのアイコンフェードイン----------------------------------------------------------



// ここからスキルバー----------------------------------------------------------

$(window).on('load scroll', function () {
  if ($('.skillbar').hasClass("js-processed")) return;
  // スクロールするたびにスクロールイベントが発火して数字が動いてしまうので、
  // 一度実行したあとに「js-processedというclass名を追加
  // →　js-processedというclass名がある場合は実行しないと最初に宣言することで繰り返し発火を防ぐ
  $(".skillbar").each(function () {
    var winScroll = $(window).scrollTop();
    var winHeight = $(window).height();
    var scrollPos = winScroll + (winHeight * 0.8);
    if ($(this).offset().top < scrollPos) {
      $('.skillbar').skillBars({
        from: 0,
        speed: 1500,
        interval: 100,
      });
      $('.skillbar').addClass('js-processed');
    }
  });
});

// ここまでスキルバー----------------------------------------------------------




// ここからモーダルウィンドウ表示----------------------------------------------------------
$(function () {
  var winScrollTop;
  $('.js-modal-open').each(function () {
    $(this).on('click', function () {
      // ↑2行について
      // 「each」メソッドの中で「this」を使うことで、どの「js-modal-open」がクリックされたかわかるようにする
      winScrollTop = $(window).scrollTop();
      // ↑モーダルでスクロールして、閉じたあとに元の場所に戻すためのスクロール位置を取得している
      var target = $(this).data('target');
      // dataメソッドで、クリックしたthis（＝js-modal-open)属性を取得して変数targetに代入することで、どのthisをクリックしたか判別できる
      var modal = document.getElementById(target);
      $(modal).fadeIn();
      $('body').css('overflow', 'hidden');
      // ↑モーダル開いた際に、bodyタグにhiddenをつけて二重スクロール防止
      return false;
    });
  });
  $('.js-modal-close').on('click', function () {
    $('.js-modal').fadeOut();
    $('body').css('overflow', 'auto');
    // ↑モーダル閉じる際に、bodyのスクロールをautoに戻す
    $('body,html').stop().animate({ scrollTop: winScrollTop }, 100);
    // ↑js-modal-closeがクリックされると、フェードアウトのアニメーションと同時に元の場所までスクロール
    return false;
  });
});
// ここまでモーダルウィンドウ表示----------------------------------------------------------



// ここからページ遷移時のフェードイン効果----------------------------------------------------------
$(window).on('load', function () {
  $('body').removeClass('fadeout');
});

$(function () {
  // ハッシュリンク(#)と別ウィンドウでページを開く場合はスルー
  $('a:not([href^="#"]):not([target])').on('click', function (e) {
    e.preventDefault(); // ナビゲートをキャンセル

    url = $(this).attr('href'); // 遷移先のURLを取得
    if (url !== '') {
      $('body').addClass('fadeout');  // bodyに class="fadeout"を挿入
      setTimeout(function () {
        window.location = url;  // 0.8秒後に取得したURLに遷移
      }, 300);
    }
    return false;
  });
});
// ここまでページ遷移時のフェードイン効果----------------------------------------------------------


// ここからページ内リンクでグローバルナビにかからないように----------------------------------------------------------

$(function () {
  var headerHight = 30;
  $('a[href^="#"]').click(function () {
    var speed = 100;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - headerHight;
    $('body,html').animate({ scrollTop: position }, speed, 'swing');
    // return false;
  });
});

// ここからページ内リンクでグローバルナビにかからないように----------------------------------------------------------
// ↓
// ハンバーガーメニューが作動しなくなるので対応が必要


// レスポンシブ対応用↓
// if (window.matchMedia("(min-width:767px)").matches) {
//   // windowサイズを変更して、767px以上になったら行うイベント
// }