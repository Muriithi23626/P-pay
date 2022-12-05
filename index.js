

 $( ".first" ).click(function() {
    $(this).animate({width: 0}, {duration: 1000});
    $(this).hide();
    $(".second").show();
    $(".second").animate({width: 400}, {duration: 1000});
});

$( ".second" ).click(function() {
    $(this).animate({width: 0}, {duration: 1000});
    $(this).hide();
    $(".first").show();
    $(".first").animate({width: 100}, {duration: 1000});
});


});
         

ScrollReveal().reveal(".slide-right", {
  duration: 3000,
  origin: "left",
  distance: "300px",
  easing: "ease-in-out"
});

ScrollReveal().reveal(".slide-up", {
  duration: 2000,
  origin: "bottom",
  distance: "100px",
  easing: "cubic-bezier(.37,.01,.74,1)",
  opacity: 0.3,
  scale: 0.5
});
   

      

