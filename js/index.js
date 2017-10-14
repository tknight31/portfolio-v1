

var options = {
  strings: ["I'm a Web Developer", "I'm a Web Designer", "I'm a Software Engineer", "I'm Tyler Knight"],
  onComplete: function(self) { displaySub() },
  typeSpeed: 60
}

var typed = new Typed(".typed", options);

const displaySub = () => {
  let subIntro = $(".sub-intro")
  subIntro.addClass('show-color')
}


$('#intro').height($(window).height())
$('.bgc').height($(window).height())
$('#thank-you').height($(window).height())

$(window).resize(function() {
    $('#intro').height($(window).height());
    $('.bgc').height($(window).height());
    $('#thank-you').height($(window).height())
});

$(window).trigger('resize');





$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});



// Scroll events
