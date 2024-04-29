

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";

var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: 'HXH-vdJRQ1U',
        events: {
            'onReady': onPlayerReady,
            //'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
  event.target.playVideo();
}
/*****************************************************/
var currentdate = new Date();
let spazio = document.querySelector("article img");

if (currentdate.getHours() > 19 ||currentdate.getHours() > 0 && currentdate.getHours() <7)
   spazio.src = "https://dragon.best/api/clock.png?time=&flip=on&sleepy=on";
else
   spazio.src = "https://dragon.best/api/clock.png";