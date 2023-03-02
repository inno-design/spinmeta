var serviceObj = ".visual_main .service_body > div";
var productObj = ".visual_main .product_body > div";
$(function() {
  $(window).resize(function() {
    cont_h = $(window).height();
    $(".item").css("minHeight", cont_h)
  });
  $(".btn_nav").on("click", function() {
    if ($("#wrap").hasClass("menuOpen")) {
      $("#wrap").stop().animate({
        left: 0
      }, 200, "easeOutExpo");
      $("#wrap").removeClass("menuOpen");
      $("header, .nav_sub").stop().animate({
        left: 0
      }, 200, "easeOutExpo");
      $(".nav_sitemap").stop().animate({
        right: -50
      }, 200, "easeOutExpo")
    } else {
      $("#wrap").stop().animate({
        left: "-70%"
      }, 200, "easeOutExpo", function() {
        $(this).addClass("menuOpen")
      });
      $("header, .nav_sub").stop().animate({
        left: "-70%"
      }, 200, "easeOutExpo");
      $(".nav_sitemap").stop().animate({
        right: 0
      }, 200, "easeOutExpo")
    }
  });
  $(window).resize(function() {
    if ($("#wrap").hasClass("menuOpen")) {
      if ($(window).width() > 768) {
        $("#wrap").css("left", 0);
        $("#wrap").removeClass("menuOpen");
        $("header, .nav_sub").css("left", 0);
        $(".nav_sitemap").css("right", -50)
      }
    }
  });
  $(".faq_list li p a").on("click", function() {
    $(this).parent().next("div").slideToggle("fast");
    $(this).parent().parent().toggleClass("selected")
  });
  $(".toggleCheck").each(function() {
    $(this).find("label").on("click", function() {
      $(this).parent().toggleClass("selected")
    })
  });
  $("header .login_on button").on("click", function() {
    $(this).parent().find("ul").slideToggle("fast");
    $(this).toggleClass("on");
    $(document).click(function() {
      $("header .login_on").find("ul").slideUp("fast");
      $("header .login_on button").removeClass("on")
    });
    return false
  });
  $(".case_nav button").on("click", function() {
    MyEvent.caseStudy($(this), $(this).index())
  });
  $(".case_nav button:first").click();
  $(".service_wrap .table_data").each(function() {
    if ($(this).find("tbody tr").length > 2) {
      $(this).find("tr:nth-child(even)").css("backgroundColor", "#fcfdfe")
    }
  });
  $(".service_section .table_data").each(function() {
    if ($(this).find("tbody tr").length > 2) {
      $(this).find("tr:nth-child(even)").css("backgroundColor", "#eaf0f7")
    }
  })
});
$(window).scroll(function() {
  var position = $(window).scrollLeft();
  $("header").css("left", -position)
});
var MyEvent = {
  serviceHover: function() {
    if ($(window).width() > 768) {
      $(serviceObj).parent().parent().css("z-index", 1);
      $(serviceObj).stop().animate({
        width: 870
      }, 400, "easeOutCubic");
      $(serviceObj).find(".title p:first-child").stop().animate({
        marginLeft: 0
      }, 100);
      $(serviceObj).find(".img").stop().animate({
        left: 435
      }, 300, "easeOutExpo");
      $(serviceObj).find(".img .img_cloud").stop().delay(100).animate({
        opacity: 1,
        left: -113
      }, 200, function() {
        MyEvent.serviceLoop()
      });
      $(serviceObj).find(".link").stop().animate({
        left: 0
      }, 200, "easeOutExpo");
      $(serviceObj).find(".btn").hide();
      $(productObj).find(".text").hide()
    }
  },
  serviceOut: function() {
    if ($(window).width() > 768) {
      $(serviceObj).stop().animate({
        width: 575
      }, 400, "easeOutCubic");
      $(serviceObj).find(".title p:first-child").stop().animate({
        marginLeft: -200
      }, 100);
      $(serviceObj).find(".link").stop().animate({
        left: -400
      }, 200, "easeOutExpo", function() {
        $(serviceObj).find(".btn").show()
      });
      $(serviceObj).find(".img").stop().animate({
        left: 324
      }, 500, "easeOutExpo");
      $(serviceObj).find(".img .img_cloud").stop().animate({
        opacity: 0,
        left: -150
      }, 200);
      $(serviceObj).find(".img .img_service").stop().animate({
        top: 0
      }, 200);
      $(productObj).find(".text").show()
    }
  },
  productHover: function() {
    if ($(window).width() > 768) {
      $(serviceObj).parent().parent().css("z-index", "auto");
      $(productObj).stop().animate({
        width: 870
      }, 400, "easeOutCubic");
      $(productObj).find(".title p:first-child").stop().animate({
        width: 435
      }, 100);
      $(productObj).find(".link").stop().animate({
        right: 0
      }, 200, "easeOutExpo");
      $(productObj).find(".btn").hide();
      $(productObj).find(".img").stop().animate({
        right: 350
      }, 400, "easeOutExpo", function() {
        MyEvent.productLoop()
      });
      $(serviceObj).find(".text").hide()
    }
  },
  productOut: function() {
    if ($(window).width() > 768) {
      $(productObj).stop().animate({
        width: 575
      }, 400, "easeOutCubic");
      $(productObj).find(".title p:first-child").stop().animate({
        width: 235
      }, 100);
      $(productObj).find(".link").stop().animate({
        right: -400
      }, 200, "easeOutExpo", function() {
        $(productObj).find(".btn").show()
      });
      $(productObj).find(".img").stop().animate({
        right: 334
      }, 400, "easeOutExpo");
      $(productObj).find(".img .img_obj p").stop().animate({
        marginTop: -20
      }, 450, "easeInCubic");
      $(productObj).find(".img .img_obj2 p").stop().animate({
        marginTop: 0
      }, 450, "easeInCubic");
      $(serviceObj).find(".text").show()
    }
  },
  serviceLoop: function() {
    $(serviceObj).find(".img .img_service").stop().animate({
      top: 10
    }, 450, "linear", function() {
      $(this).stop().animate({
        top: -10
      }, 900, "linear", function() {
        $(this).stop().animate({
          top: 10
        }, 900, "linear", function() {
          $(this).stop().animate({
            top: -10
          }, 900, "linear", function() {
            $(this).stop().animate({
              top: 10
            }, 900, "linear", function() {
              $(this).stop().animate({
                top: -10
              }, 900, "linear", function() {
                $(this).stop().animate({
                  top: 10
                }, 900, "linear", function() {
                  $(this).stop().animate({
                    top: -10
                  }, 900, "linear", function() {
                    $(this).stop().animate({
                      top: 10
                    }, 900, "linear", function() {
                      $(this).stop().animate({
                        top: 0
                      }, 450, "linear")
                    })
                  })
                })
              })
            })
          })
        })
      })
    })
  },
  productLoop: function() {
    $(productObj).find(".img .img_obj p").stop().animate({
      marginTop: 0
    }, 450, "easeOutBounce", function() {
      $(this).delay(500).animate({
        marginTop: -20
      }, 450, "easeInCubic", function() {
        $(this).delay(500).animate({
          marginTop: 0
        }, 450, "easeOutBounce", function() {
          $(this).delay(500).animate({
            marginTop: -20
          }, 450, "easeInCubic", function() {
            $(this).delay(500).animate({
              marginTop: 0
            }, 450, "easeOutBounce", function() {
              $(this).delay(500).animate({
                marginTop: -20
              }, 450, "easeInCubic", function() {})
            })
          })
        })
      })
    });
    $(productObj).find(".img .img_obj2 p").stop().animate({
      marginTop: -20
    }, 450, "easeOutBounce", function() {
      $(this).delay(500).animate({
        marginTop: 0
      }, 450, "easeInCubic", function() {
        $(this).delay(500).animate({
          marginTop: -20
        }, 450, "easeOutBounce", function() {
          $(this).delay(500).animate({
            marginTop: 0
          }, 450, "easeInCubic", function() {
            $(this).delay(500).animate({
              marginTop: -20
            }, 450, "easeOutBounce", function() {
              $(this).delay(500).animate({
                marginTop: 0
              }, 450, "easeInCubic", function() {})
            })
          })
        })
      })
    })
  },
  mainHover: function() {
    $(serviceObj).hover(function() {
      MyEvent.serviceHover()
    }, function() {
      MyEvent.serviceOut()
    });
    $(productObj).hover(function() {
      MyEvent.productHover()
    }, function() {
      MyEvent.productOut()
    })
  },
  caseStudy: function(obj, idx) {
    obj.stop().animate({
      width: 30
    }, 200, "easeOutExpo");
    obj.addClass("on");
    obj.siblings().animate({
      width: 8
    }, 200, "easeOutExpo");
    obj.siblings().removeClass("on");
    $(".case_logo li:eq(" + idx + ")").show();
    $(".case_logo li:eq(" + idx + ")").siblings().hide();
    if (idx == 0) {
      $(".case_study > ul").stop().animate({
        left: 0
      }, 400, "easeOutExpo")
    } else {
      if ($(window).width() > 768) {
        $(".case_study > ul").stop().animate({
          left: -910
        }, 400, "easeOutExpo")
      } else {
        $(".case_study > ul").stop().animate({
          left: "-100%"
        }, 400, "easeOutExpo")
      }
    }
  },
  scrollMenu: function() {
    $(".slide_sub a").click(function() {
      _top = $($(this).attr("href")).position().top - 218;
      $("html, body").stop().animate({
        scrollTop: _top
      }, 500);
      return false
    });
    $(window).scroll(function() {
      var h1 = $("#content_01").height();
      var h2 = h1 + $("#content_02").height();
      var h3 = h2 + $("#content_03").height();
      var h4 = h3 + $("#content_04").height();
      var h5 = h4 + $("#content_05").height();
      var h6 = h5 + $("#content_06").height();
      var h7 = h6 + $("#content_07").height();
      var scrollTop = $(window).scrollTop();
      $(".slide_sub ul li").removeClass("selected");
      if (scrollTop < h1) {
        $(".slide_sub ul li:eq(0)").addClass("selected")
      } else {
        if (scrollTop >= h1 && scrollTop < h2) {
          $(".slide_sub ul li:eq(1)").addClass("selected")
        } else {
          if (scrollTop >= h2 && scrollTop < h3) {
            $(".slide_sub ul li:eq(2)").addClass("selected")
          } else {
            if (scrollTop >= h3 && scrollTop < h4) {
              $(".slide_sub ul li:eq(3)").addClass("selected")
            } else {
              if (scrollTop >= h4 && scrollTop < h5) {
                $(".slide_sub ul li:eq(4)").addClass("selected")
              } else {
                if (scrollTop >= h5 && scrollTop < h6) {
                  $(".slide_sub ul li:eq(5)").addClass("selected")
                } else {
                  if (scrollTop >= h6 && scrollTop < h7) {
                    $(".slide_sub ul li:eq(6)").addClass("selected")
                  }
                }
              }
            }
          }
        }
      }
      var scroll = $.cookie("scroll");
      if (scroll != null) {
        var stringRegex = /[#]/gi;
        if (stringRegex.test(scroll)) {
          var pathSplit = scroll.split("#");
          if (pathSplit[1]) {
            setTimeout(function() {
              _top = $("#" + pathSplit[1]).position().top - 218;
              $("html, body").stop().animate({
                scrollTop: _top
              }, 500);
              $.removeCookie("scroll", {
                path: "/"
              })
            }, 500)
          }
        }
      }
    })
  }
};
var timer = setTimeout(function() {
  MyEvent.serviceHover();
  setTimeout(function() {
    MyEvent.serviceOut();
    MyEvent.productHover();
    setTimeout(function() {
      MyEvent.productOut();
      setTimeout(function() {
        MyEvent.mainHover()
      }, 500)
    }, 2000)
  }, 2000)
}, 3000);