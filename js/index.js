

var options = {
  strings: ["I'm Web Developer", "I'm Web Designer", "I'm Software Engineer", "I'm Tyler Knight"],
  onComplete: function(self) { displaySub() },
  typeSpeed: 60
}

var typed = new Typed(".typed", options);

const displaySub = () => {
  let subIntro = $(".sub-intro")
  subIntro.addClass('show-color')
}


$('#intro').height($(window).height())

$(window).resize(function() {
    $('#intro').height($(window).height());
});

$(window).trigger('resize');


// Scroll events
