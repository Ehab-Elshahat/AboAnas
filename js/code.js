$(function () {
  // Show Hide Popup
  $(window).on("load", function () {
    $(".spinner-container").delay(2000).fadeOut(500);
  });

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
    $("body, html").animate(
      {
        scrollTop: 0,
      },
      1000
    );
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

  // slide
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

    blocks.each(function () {
      if ($(window).scrollTop() > $(this).offset().top - 100) {
        var blockId = "#" + $(this).attr("id");

        $(".nav-item ").removeClass("active");

        $('.nav-item a[data-scroll="' + blockId + '"]')
          .parent()
          .addClass("active");
      }
    });
  });

  // Toggle Class Open On Settigs Box
  $(".toggler-icon").click(function () {
    $(".settings-box").toggleClass("open");
  });

  // Color Option
  $(".color-option ul li").click(function () {
    $(".color-option ul li").removeClass("active");

    // Get Attr Data color from li
    var color = $(this).attr("data-color");

    // Set LocalStorage Item
    localStorage.setItem("theme-color", color);

    // Refresh Window
    location.reload();
  });

  // Set Color On Classes theme-color From Local Storage
  $(".theme-color").css("color", localStorage.getItem("theme-color"));

  // Set Color And background-color On Classes theme-background From Local Storage
  $(".theme-background").css({
    "background-color": localStorage.getItem("theme-color"),
    color: "#FFF",
  });
});
