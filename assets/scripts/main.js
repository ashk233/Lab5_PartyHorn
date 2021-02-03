var audio = document.getElementById("horn-sound");
var volumeNumber = document.getElementById("volume-number");
var volumeSlider = document.getElementById("volume-slider");
volumeNumber.addEventListener("change",changeVolumeByNumber);
volumeSlider.addEventListener("change",changeVolumeBySlider);
var icon = document.getElementById("volume-image");
var image = document.getElementById("sound-image");
var button = document.getElementById("honk-btn");

function resetIcon() {
    if (audio.volume >= 0.67) {
        icon.src = "./assets/media/icons/volume-level-3.svg";
    } else if (audio.volume >= 0.34) {
        icon.src = "./assets/media/icons/volume-level-2.svg";
    } else if (audio.volume >= 0.01) {
        icon.src = "./assets/media/icons/volume-level-1.svg";
    } else {
        icon.src = "./assets/media/icons/volume-level-0.svg"
    }
}

function changeVolumeByNumber(){
    audio.volume = volumeNumber.value / 100;
    volumeSlider.value = volumeNumber.value;
    resetIcon();
    if (audio.volume == 0) {
        button.disabled = true;
    } else {
        button.disabled = false;
    }
}

function changeVolumeBySlider(){
    audio.volume = volumeSlider.value / 100;
    volumeNumber.value = volumeSlider.value;
    resetIcon();
    if (audio.volume == 0) {
        button.disabled = true;
    } else {
        button.disabled = false;
    }
}

var air = document.getElementById("radio-air-horn");
air.addEventListener("click",function(){
    audio.src = "./assets/media/audio/air-horn.mp3";
    image.src = "./assets/media/images/air-horn.svg";
})
var car = document.getElementById("radio-car-horn");
car.addEventListener("click",function(){
    audio.src = "./assets/media/audio/car-horn.mp3"
    image.src = "./assets/media/images/car.svg";
})
var party = document.getElementById("radio-party-horn");
party.addEventListener("click",function(){
    audio.src = "./assets/media/audio/party-horn.mp3"
    image.src = "./assets/media/images/party-horn.svg";
})

button.onclick = function(){
    audio.play();
    return false;
};