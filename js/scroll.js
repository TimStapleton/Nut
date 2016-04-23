$(window).scroll(function(){

  //How much User has scrolled from top of the page (in pixels)
  var pxScroll = $(this).scrollTop();
  //User's screen height(in pixels)
  var sHeight = screen.height;

  //How much User has scrolled from top of the page (in percents)
  var percentsScroll = pxScroll/sHeight;

  //Amount of blur in pixels which will be applied to image after User scrolls 100vh
  var maxBlur = 5;
  //Initial darkness
  var darkStart = 1;
  var darkEnd   = 0.6;

  //This is where magic happens (we change css properties of .blur-bg element)
  $('.bg').css({
      //Parallax Effect
      'transform' : 'translate(0px, -'+  (pxScroll)/40 +'px) scale(1.1)',
      //Blur and Darken background
      'filter': 'blur('+ (maxBlur*percentsScroll) +'px) brightness('+ (darkStart-(darkStart-darkEnd)*percentsScroll) +')',
      '-webkit-filter': 'blur('+ (maxBlur*percentsScroll) +'px) brightness('+ (darkStart-(darkStart-darkEnd)*percentsScroll) +')'
  })
  //And some more parallax effect for intro text and logo
  $('.title').css({
      'transform' : 'translate(0px, '+  (pxScroll)/7 +'px)',
  })
  $('.intro').css({
      'transform' : 'translate(0px, '+  (pxScroll)/5 +'px)',
  })
});
