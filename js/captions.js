/* ===================
    VARIABLES
====================== */

const player = document.getElementById('player');
const caption = document.querySelectorAll('.captions span');
const captionsContainer = document.querySelector('.captions');
       
/* =====================
    CAPTION HIGHLIGHTER
======================== */

player.addEventListener('timeupdate', () => {

    for (let i = 0; i < caption.length; i += 1) {

        let time = player.getCurrentTime();

        let start = caption[i].getAttribute('data-start');

        let end = caption[i].getAttribute('data-end');

        if (time >= start && time <= end) {
            caption[i].className = 'highlight';
        } else {
            caption[i].className = '';
        }
    }
});

/* =====================
    CLICK, JUMP
======================== */

captionsContainer.addEventListener('click', (e) => {

    let  clickedTimeValue = e.target.getAttribute('data-start');

    if (clickedTimeValue) {
        player.setCurrentTime(clickedTimeValue);

        player.play();
    }
});

/* ==========================
    HIDE/SHOW VIDEO CONTROLS
============================= */

const controls = document.getElementsByClassName("mejs__controls");
const vid = document.getElementById("player");

function hideControls() {
	if (vid.paused === false) {
	controls.style.visibility = "hidden";
	}
}

function showControls() {
	controls.style.visibility = "visible";

}