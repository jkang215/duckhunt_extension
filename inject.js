// this is the code which will be injected into a given page...
// (function() {
// 	// just place a div at top right
// 	var div = document.createElement('div');
// 	div.style.position = 'fixed';
// 	div.style.top = 0;
// 	div.style.right = 0;
// 	div.textContent = 'Injected!';
// 	document.body.appendChild(div);

// 	alert('inserted self... giggity');

// })();

// create the bird
const bird = document.createElement("img");
bird.src = "https://opengameart.org/sites/default/files/GIF-sample.gif";
bird.id = "bird";
bird.style.position = "fixed";
// initialze position of bird to top left
bird.style.top = "0";
bird.style.left = "50%";
// initialize size of bird
bird.style.width = "150px";
bird.style.height = "100px";
// make sure bird is on top of all other elements
bird.style.zIndex = "9001";
document.body.appendChild(bird);

// bird moving variables
let birdTop = 0;
let birdLeft = 0;
let reverseLeft = false;
let reverseRight = false;
// move the bird
setInterval(() => {
  if (birdTop === window.innerHeight - 50 || birdTop < 0) birdTop = 0;
  if (birdLeft === window.innerWidth - 75 || birdLeft < 0) birdLeft = 0;
  if (reverseRight) birdTop -= 1;
  else birdTop += 1;
  if (reverseLeft) birdLeft -= 1;
  else birdLeft += 1;
  bird.style.top = birdTop.toString() + "px";
  bird.style.left = birdLeft.toString() + "px";
}, 5);
// change the birds direction randomly
setInterval(() => {
  if (randomNumber() > 50) {
    reverseRight = !reverseRight;
    bird.style.rotate = "180deg";
  }
  if (randomNumber() > 50) reverseLeft = !reverseLeft;
}, 1000);

// random number generator 1 - 100;
const randomNumber = () => {
  return Math.floor(Math.random() * 100);
};
