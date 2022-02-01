var blurAmount = 0;
var MAX_BLUR = 4;
var blurRate = .1
var opacity = 1;
var fade = true;
function blurText(){
    var body = document.getElementsByClassName('blur');
    blurAmount += blurRate
    if (blurAmount < MAX_BLUR) {
        for (var i=0; i < body.length; i++) {
            body.item(i).setAttribute('style', 'filter:blur('+blurAmount+'px)');
        };
    }else{
        blurAmount += 2;
        for (var i=0; i < body.length; i++) {
            body.item(i).setAttribute('style', 'filter:blur('+blurAmount+'px)');
        };
    }
}
