var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (isMobile) {
document.documentElement.webkitRequestFullScreen();
}
var c=0;
function shownav(){
    var icon = document.getElementById("menuicon")
    var nav = document.getElementById("navbar");
    if(c%2==0){
        nav.classList.remove("removenav");
        nav.classList.add("shownav");
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
    }
    else{
        nav.classList.remove("shownav");
        nav.classList.add("removenav");
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
    }
    c++;
}
var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 300 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  
  window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #759fbc }";
    document.body.appendChild(css);
  };

  //ajust scrole to page
  (function($, window) {
    var adjustAnchor = function() {

        var $anchor = $(':target'),
                fixedElementHeight = window.screen.height/12.3;
                
        if ($anchor.length > 0) {

            $('html, body')
                .stop()
                .animate({
                    scrollTop: $anchor.offset().top - fixedElementHeight
                }, 200);

        }
        var $anchor = null
    };

    $(window).on('hashchange load', function() {
        adjustAnchor();
    });

})(jQuery, window);

