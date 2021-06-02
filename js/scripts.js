$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
    $('img').fadeOut();
    $('img').fadeIn();
  });

  $('h1').click(function() {
    $('h1').slideUp();
    $('h1').slideDown();
  });

  $('img').click(function() {
    $('img').slideUp();
    $('img').slideDown();
  });

});

