// Stoppa användare i firefox från att dra bilder till en ny flik
$(document).on("dragstart", function(e) {
  if (e.target.nodeName.toUpperCase() == "IMG") {
    return false;
  }
});

$( document ).ready(function() {
    $("#page-loaded").fadeIn();
});

window.onscroll = function() {onScrollFunction()};
function onScrollFunction() {
  if (window.pageYOffset > 0) {
	  $(".header-bg").addClass("transform-header");
  }
}

var lastScrollTop = 0;
$(window).scroll(function(event){
  var st = $(this).scrollTop();
  var page = $(".page1").height();
  if (st > lastScrollTop){
    if ($(this).scrollTop() < page) {
      $(".header-bg").addClass("transform-header");
    }
    $(".header-inner").fadeOut();
    //nosticky
  } else {
    if ($(this).scrollTop() > page) {
      $(".header-bg").removeClass("transform-header");
    }
    $(".header-inner").fadeIn();
    //sticky
  }
  lastScrollTop = st;
});