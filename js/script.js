jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる

  var topBtn = $(".pagetop");
  topBtn.hide();

  // scroll位置情報確認
  $(window).scroll(function () {
    var test = $(this).scrollTop();
    console.log(test);
    // header -> 1100
  });

  // header(index.html)
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1100) {
      $(".header__inner").css("background", "rgba(17, 17, 17, 1)");
    } else {
      $(".header__inner").css("background", "rgba(17, 17, 17, 0.5)");
    }
  });

  // header(blog.html)
  $(window).scroll(function () {
    if ($(this).scrollTop() > 395) {
      $(".header__inner").css("background", "rgba(17, 17, 17, 1)");
    } else {
      $(".header__inner").css("background", "rgba(17, 17, 17, 0.5)");
    }
  });

  // ボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1050) {
      // 指定px以上のスクロールでボタンを表示
      $(".top-btn").fadeIn(300);
    } else {
      // 画面が指定pxより上ならボタンを非表示
      $(".top-btn").fadeOut(300);
    }
  });

  // ボタンをクリックしたらスクロールして上に戻る
  // topBtn.click(function () {
  $(".js-top-btn").click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      300,
      "swing"
    );
    return false;
  });

  //ドロワーメニュー
  // $("#MenuButton").click(function () {
  //   // $(".l-drawer-menu").toggleClass("is-show");
  //   // $(".p-drawer-menu").toggleClass("is-show");
  //   $(".js-drawer-open").toggleClass("open");
  //   $(".drawer-menu").toggleClass("open");
  //   $("html").toggleClass("is-fixed");

  // });
  $(".js-drawer-menu").click(function () {
    $(".js-drawer-menu").toggleClass("js-drawer-menu__open");
    $(".sp-navi").toggleClass("sp-navi__open");
  });

  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)

  $(document).on("click", 'a[href*="#"]', function () {
    let time = 400;
    let header = $("header").innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $("html,body").animate({ scrollTop: targetY }, time, "swing");
    return false;
  });

  // mv swiper.js;
  let swipeOption = {
    loop: true,
    effect: "fade",
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    speed: 2000,
  };
  new Swiper(".js-swiper-container1", swipeOption);

  // works swiper
  var jsSwiperContainer2 = new Swiper(".js-swiper-container2", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination2",
      clickable: true,
    },
  });
});
