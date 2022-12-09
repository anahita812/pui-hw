//script for scrollmagic animation

var controlset = new ScrollMagic.Controller();
var pointtrig = new ScrollMagic.Scene({
    triggerElement: '.section2'
})
.setClassToggle('.section2','show')
.addTo(controlset);

var controlset1 = new ScrollMagic.Controller();
var pointtrig1 = new ScrollMagic.Scene({
    triggerElement: '.section3'
})
.setClassToggle('.section3','show')
.addTo(controlset);



