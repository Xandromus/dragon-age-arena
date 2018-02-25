 var soundModule = {};
 (function() {

var num = 0;

// changes sound icon to desired mute state when clicked
function changeImage(el) {
    el.click = ++num;
    el.src = ((el.click) % 2 === 0) ? "assets/images/sound_off.png" : "assets/images/sound_icon.png";
}

var audio = document.querySelector('#musicPlayer');

// mutes and unmutes audio element when sound icon is clicked
document.getElementById('soundicon').addEventListener('click', function(e) {
    e = e || window.event;
    audio.muted = !audio.muted;
    e.preventDefault();
}, false);

soundModule.changeImage = changeImage;

 })();