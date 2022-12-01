// sounds on
function playAudio() {
  document.getElementById('sound').play();
  document.getElementById('sound').volume = 0.05;
  document.getElementById('sound').muted = false;
  document.getElementById('effectOne').muted = false;
  document.getElementById('effectTwo').muted = false;

  document.getElementById("soundOn").style.fontStyle = "italic";
  document.getElementById("soundOn").style.textDecoration = "underline";
  document.getElementById("soundOff").style = "none";
}

// sounds off
function muteAudio(){
  document.getElementById('sound').muted = true;
  document.getElementById('effectOne').muted = true;
  document.getElementById('effectTwo').muted = true;

  document.getElementById("soundOn").style = "none";
  document.getElementById("soundOff").style.textDecoration = "underline";
  document.getElementById("soundOff").style.fontStyle = "italic";
}
