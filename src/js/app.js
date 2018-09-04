import $ from "jquery";
import ScrollReveal from "scrollreveal";
import "bootstrap";
import "slick-carousel/slick/slick";
require("waypoints/lib/jquery.waypoints.js");
require("waypoints/lib/shortcuts/inview.js");
// JS Goes here - ES6 supported
if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", (user) => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}

window.sr = ScrollReveal({reset: true});

$(() => {
  var $root = $("html, body");

  $('a[href^="#"]').click(function() {
    var href = $.attr(this, "href");

    if (href === "#Geothermal" || href === "#4EE" || href === "#Projects" || href === "#Contact") {
      $root.animate({
        scrollTop: $(href).offset().top
      }, 500, function() {
        window.location.hash = href;
      });
    }
    else {
      $root.animate({
        scrollTop: 0
      }, 500);
    }
  });

  // Change navbar color scheme based on current section
  $("header, section").waypoint(function(direction) {
    const bg = (direction === "up") ? $(this.previous().element).data("bg") : $(this.element).data("bg");

    $("nav").removeClass("dark light");
    $("nav").addClass(bg);
  }, {
    offset: 50
  });

  $("section").each((index, element) => {
    new Waypoint.Inview({
      element: element,
      entered: function(direction) {
        $(`a[href^="#${element.id}"`).addClass("is-active");
      },
      exited: function(direction) {
        $(`a[href^="#${element.id}"`).removeClass("is-active");
      }
    });
  });


  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function() {

    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".navbar").toggleClass("is-opened");
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");

  });

  // Dettached effect
  $(document).on("scroll", function() {
    if ($(window).scrollTop() > 0) {
      $("nav").addClass("sticky");
    } else {
      $("nav").removeClass("sticky");
    }
  });

  $(".slides").slick({
    arrows: false,
    sldiesToShow: 1,
    slidesToScroll: 1,
    rows: 0,
    infinite: false,
    fade: true,
    cssEase: "linear",
    speed: 150,
    mobileFirst: true,
    dots: true,
    dotsClass: "tabs",
    customPaging: function(slider, i) {
      return '<a><i class="fa fa-circle"></i></a>';
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          customPaging: function(slick, i) {
            var slide = $(slick.$slides[i]);
            var name = slide.data("name");
            return "<a>" + name + "</a>";
          },
          prevArrow: '<span class="prev"><i class="fa fa-angle-left" /></span>',
          nextArrow: '<span class="next"><i class="fa fa-angle-right"></span></span>'
        }
      }
    ]
  });
});


$("button").click(function() {
  var _target = $(this).data("target");
  gtag("event", "select_content", {"content_type": _target});
});
