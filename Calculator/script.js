// output is the area on the calculator that shows what the user does
const output = document.getElementById('screen');

// every button in HTML has this-attribute, so the function can use any of them
// this way every button press is shown on the screen
function calculator(calc) {
// button matches every button on the calculator
let button = calc.innerHTML;

  // if the button pressed is '='
  // the program shows the output of chosen numbers on the screen
  if (button == '=') {
    document.getElementById('screen').innerHTML = eval(document.getElementById('screen').innerHTML);
  } else if (button == 'AC') {
    // if the chosen button is AC, the screen empties and shows O
    document.getElementById('screen').innerHTML = '0';
    // if the button is C...
  } else if (button == 'C') {
    // but the length of the screen is only 1, the screen empties and shows 0
    if (document.getElementById('screen').innerHTML.length == 1) {
      document.getElementById('screen').innerHTML = '0';
    } else {
        // if there are more than 2 numbers on the screen, pressing C removes the latest one
        document.getElementById('screen').innerHTML = document.getElementById('screen').innerHTML.slice(0,-1);
      }
    } else {
      // if the screen shows 0, any number pressed button appears on the screen and replaces the 0
      if (document.getElementById('screen').innerHTML == '0') {
        document.getElementById('screen').innerHTML = button;
      } else {
        // in any other case the calculator calculates what is put on the screen
        document.getElementById('screen').innerHTML += button;
      }
    }
  }
