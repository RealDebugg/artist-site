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
	$(".header-bg").removeClass("transform-header");
  } else {
    $(".header-bg").addClass("transform-header");
  }
}

//add sticky when more and up
//Bilder ,texter, spotify.