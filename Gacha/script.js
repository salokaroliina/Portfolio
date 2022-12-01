let index = 0;
// USE THE MACHINE
function gacha() {
  // set of images the program goes through
  const images = [];
  images[0] = ['Images/handle_01.png'];
  images[1] = ['Images/handle_02.png'];
  images[2] = ['Images/handle_03.png'];
  images[3] = ['Images/handle_04.png'];
  images[4] = ['Images/handle_01.png'];

  document.getElementById('effectOne').play();
  document.getElementById('effectOne').volume = 0.05;
  document.getElementById('effectOne').playbackRate = 1;

  // the original clickable handle that starts the function
  const handle = document.getElementById('handle');
  // handleReplace can't be clicked, unlike the original handle
  const handleReplace = document.getElementById('handleReplace');
    // original handle style goes 'none'
    handle.style.display = 'none';
    // handleReplace goes through the images-array, starting from 0
    handleReplace.src = images[index];
      // the program goes through all images one by one until it reaches image[0] again
      if (index == 4) {
        index = 0;
      } else {
        index++;
      }
      // setTimeout gives time to go through every image (0.3s)
      const myTimeout = setTimeout(gacha, 300);
      // when the index goes back to 0, the timeOut clears out and the program stops going through the images
      // at the same time a new timeOut starts, giving the time (0.5s) before the second function excecutes
      if (index == 0) {
          clearTimeout(myTimeout);
          const newTimeout = setTimeout(ball,500)
      }

    function ball() {

      const colors =
      ['Images/Balls/01.png','Images/Balls/02.png','Images/Balls/03.png','Images/Balls/04.png','Images/Balls/05.png','Images/Balls/06.png',
          'Images/Balls/07.png','Images/Balls/08.png','Images/Balls/09.png','Images/Balls/10.png','Images/Balls/11.png','Images/Balls/12.png',
          'Images/Balls/13.png','Images/Balls/14.png','Images/Balls/15.png','Images/Balls/16.png','Images/Balls/17.png','Images/Balls/18.png',
          'Images/Balls/19.png','Images/Balls/20.png','Images/Balls/21.png','Images/Balls/22.png',
          'Images/Balls/22.png','Images/Balls/23.png','Images/Balls/24.png'];
      // The img on top (empty hatch) disappears
      document.getElementById('noball').style.display = 'none';

      // Gives random ball from the 'colors' array
      let x = Math.floor(Math.random() * colors.length);
      // noball-img gets replaced with a random image
      document.getElementById('hatch').src = colors[x];
  }
}

// OPEN THE MODAL
function openModal() {
  document.getElementById('effectTwo').play();
  document.getElementById('effectTwo').volume = 0.05;
  // clicking the ball opens a new modal
  const modal = document.getElementById('myModal');
    // the hatch looks empty again
    document.getElementById('hatch').src = "Images/noball.png";

    // RANDOM NOTE
    const notes = [1,2,3,4];
    let ranNote = Math.floor(Math.random() * notes.length);

    // manipulating CSS with JS by changing the #note's bg img
    switch (ranNote) {
      case 1:
      document.getElementById('note').style.backgroundColor = "rgb(255,255,172)";
        break;
      case 2:
      document.getElementById('note').style.backgroundColor = "rgb(255,255,205)";
        break;
      case 3:
      document.getElementById('note').style.backgroundColor = "rgb(255,161,255)";
        break;
      case 4:
      document.getElementById('note').style.backgroundColor = "rgb(255,137,238)";
        break;
      case 5:
      document.getElementById('note').style.backgroundColor = "rgb(230,190,255)";
        break;
      default:
      document.getElementById('note').style.backgroundColor = "rgb(213,161,255)";
    }

    // RANDOM TEXT APPEARS ON THE MODAL
    const text = ['You are loved and you matter.','You are perfect the way you are.',
    'You may not be able to change the past, <br> but the future is yours to create.',
    'Everyone has their own paths in life. <br>There is no need to compare yourself to others.','You deserve to be happy<br> and have peace in your life.',
    'Always remember, you are enough.','Never change for another person. <br> Change only for yourself.',
    'The real strength is admitting <br>you do not have it.','Learn to treat yourself the way <br>you treat your loved ones.',
    'There is so much good in you.',
    'Change might be scary, it may hurt and you may feel lost. <br> But in the end you will feel proud of yourself for doing it.',
    'I am proud of you.<br> I hope you are proud of yourself too.','You are never too old to try new things.',
    'Your worst enemy is often yourself. <br>Learn to love your enemy.','Go to the mirror and say out loud <br>"I love you" to yourself.',
    'All of your emotions are valid.','Showing your emotions does not make you weak.<br> It makes you strong.'];
    let random = Math.floor(Math.random() * text.length);
      // modal is displayed as a block
      modal.style.display = 'block';
      document.getElementById('modalText').innerHTML = text[random];
}

// CLOSE THE MODAL
function closeModal() {
  const modal = document.getElementById('myModal');
  const close = document.getElementsByClassName('close');
    // Modal display goes 'none'
    modal.style.display = 'none';
    document.getElementById('handle').src = 'Images/handle_01.png';
    // Makes the hatch look empty and makes it non-clickable
    document.getElementById('noball').style.display = 'block';
    // handle turns back to normal
    handle.style.display = 'block';
}

// CLOSE THE MODAL, VERSION 2
window.onclick = function(event) {
  const modal = document.getElementById('myModal');
    // Modal display goes 'none' when the modal-area is clicked
    if (event.target == modal) {
      modal.style.display = "none";
      document.getElementById('handle').src = 'Images/handle_01.png';
      // Makes the hatch look empty and makes it non-clickable
      document.getElementById('noball').style.display = 'block';
      // handle turns back to normal
      handle.style.display = 'block';
    }
}


function creditModal() {
  const credits = document.getElementById('credModal');
  document.getElementById('credits').style.backgroundColor = "rgb(230,190,255)";
  credits.style.display = 'block';
}

function closeCredits(){
  const credits = document.getElementById('credModal');
  credits.style.display = 'none';
}
