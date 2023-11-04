const musicPlayer = document.getElementById('musicPlayer');
const playButton = document.getElementById('playButton');
const pauseButton = document.getElementById('pauseButton');
const seekBar = document.getElementById('seekBar');

let isPlaying = false;

function loadMusic() {
    const musicFile = document.getElementById('musicFile').files[0];
    if (musicFile) {
        musicPlayer.src = URL.createObjectURL(musicFile);
        playButton.disabled = false;
        pauseButton.disabled = false;
    }
}

function playMusic() {
    if (!isPlaying) {
        musicPlayer.play();
        playButton.innerText = 'Pause';
        isPlaying = true;
    } else {
        pauseMusic();
    }
}

function pauseMusic() {
    musicPlayer.pause();
    playButton.innerText = 'Play';
    isPlaying = false;
}

function seekMusic() {
    const seekTime = musicPlayer.duration * (seekBar.value / 100);
    musicPlayer.currentTime = seekTime;
}

musicPlayer.addEventListener('timeupdate', updateSeekBar);

function updateSeekBar() {
    const currentTime = musicPlayer.currentTime;
    const duration = musicPlayer.duration;
    const percentage = (currentTime / duration) * 100;
    seekBar.value = percentage;
}

