$(function () {
  // When Window Scrolling
  // Select Scroll Top Btn
  var scrollToTopBtn = $(".totop");
  $(window).scroll(function () {
    var scrollingTop = $(window).scrollTop();

    // Add Class On Navbar when window Scroll
    if (scrollingTop > 1) {
      $("header .navbar").addClass("scrolling");
    } else {
      $("header .navbar").removeClass("scrolling");
    }

    // Show Hide Scroll To Top Btn
    if (scrollingTop > 100) {
      scrollToTopBtn.fadeIn();
    } else {
      scrollToTopBtn.fadeOut();
    }
  });

  // Scroll To ToP
  scrollToTopBtn.on("click", function () {
    $(window).scrollTop(0);
  });

  //Add And Remove Class Active On NavbarLinks
  $("header .navbar .navbar-nav .nav-item .nav-link").click(function () {
    $(this).parent().addClass("active");
    $(this).parent().siblings().removeClass("active");
  });

  // typed js
  var typed = new Typed(".element", {
    strings: ["Ehab Elshahat", "Web Desgin.", "Front End Developer."],
    typeSpeed: 50, // typing speed
    backDelay: 1000, // pause before backspacing
    backSpeed: 50,
    loop: true,
    loopCount: Infinity,
  });

  // slider
  $(".bxslider").bxSlider({
    pager: false,
    speed: 1000,
    nextText: "<i class='fas fa-chevron-right'></i>",
    prevText: "<i class='fas fa-chevron-left'></i>",
    nextSelector: $(".next"),
    prevSelector: $(".prev"),
  });

  $("#owl-example").owlCarousel({
    loop: true,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    items: 1,
  });

  // Sync links with sections
  $(".nav-item .nav-link").click(function (e) {
    e.preventDefault();

    var dataScroolLink = $(this).attr("data-scroll");

    $("body, html").animate({
      scrollTop: $(dataScroolLink).offset().top,
    });
  });

  $(window).scroll(function () {

    var blocks = $(".block");

    blocks.each(function (block) {
      // console.log($(this).offset().top);

      if ($(window).scrollTop() > $(this).offset().top  - 100) {
        var blockId = "#" + $(this).attr("id");

        $(".nav-item ").removeClass("active");

        $('.nav-item a[data-scroll="' + blockId + '"]')
          .parent()
          .addClass("active");
      }
    });
  });
});
