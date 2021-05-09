// Stoppa användare i firefox från att dra bilder till en ny flik
$(document).on("dragstart", function(e) {
  if (e.target.nodeName.toUpperCase() == "IMG") {
    return false;
  }
});

$( document ).ready(function() {
    $("#page-loaded").fadeIn();
});