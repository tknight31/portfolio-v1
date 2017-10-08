

var options = {
  strings: ["I'm Tyler", "I am a web developer"],
  onComplete: function(self) { displaySub() },
  fadeOut: true,
  typeSpeed: 60
}

var typed = new Typed(".typed", options);

const displaySub = () => {
  let subIntro = $(".sub-intro")
  subIntro.css({"color": "white"})
}


$('#intro').height($(window).height())

$(window).resize(function() {
    $('#intro').height($(window).height());
});

$(window).trigger('resize');
