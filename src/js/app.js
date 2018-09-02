import $ from "jquery";
import ScrollReveal from "scrollreveal";
import "waypoints";
import "bootstrap";
import "slick-carousel/slick/slick";

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
  });

  // Bootstrap Scrollspy
  $("body").scrollspy({target: "#sitemap"});

  // Change navbar color scheme based on current section
  $("header, section").waypoint(function(direction) {
    const bg = (direction === "up") ? $(this.previous().element).data("bg") : $(this.element).data("bg");
    $("nav").removeClass("dark light");
    $("nav").addClass(bg);
  }, {
    offset: 50
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
    sldiesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    rows: 0,
    infinite: false,
    fade: true,
    cssEase: "linear",
    speed: 150,
    mobileFirst: true,
    dots: true,
    dotsClass: "tabs mobile",
    customPaging: function(slider, i) {
      return '<a class="text-xs"><i class="fa fa-circle"></i></a>';
    },
    responsive: [
      {
        breakpoint: 480,
        settings: {
          dotsClass: "tabs",
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


// $('button').click(function () {
// 	var _target = $(this).data('target')
// 	// $('html, body').animate({
// 	// 	scrollTop: $('#' + _target).offset().top - $('.navbar').outerHeight()
// 	// }, 600)
// 	gtag('event', 'select_content', {'content_type': _target})
// })
