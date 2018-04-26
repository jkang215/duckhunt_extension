
// create the bird
const bird = document.createElement("img");
// bird.src = "https://opengameart.org/sites/default/files/GIF-sample.gif";
bird.src = "http://bestanimations.com/Animals/Birds/Doves/animated-dove-gif-9.gif"
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
let randomInsideTop = Math.floor(Math.random() * window.innerHeight - 100);
let randomInsideLeft = Math.floor(Math.random() * window.innerWidth - 150);
let birdTop = randomInsideTop;
let birdLeft = randomInsideLeft;
let reverseLeft = false;
let reverseTop = false;
// move the bird
setInterval(() => {
  if (birdTop === window.innerHeight) birdTop = 0;
  if (birdTop < -50) birdTop = window.innerHeight - 150;
  if (birdLeft === window.innerWidth) birdLeft = 0;
  if (birdLeft < -100) birdLeft = window.innerWidth - 200;
  if (reverseTop) birdTop -= 1;
  else birdTop += 1;
  if (reverseLeft) birdLeft -= 1;
  else birdLeft += 1;
  bird.style.top = birdTop.toString() + "px";
  bird.style.left = birdLeft.toString() + "px";
}, 5);
// change the birds direction randomly
setInterval(() => {
  if (randomNumber() > 50) {
    reverseTop = !reverseTop;
  }
  if (randomNumber() > 50) {
	  reverseLeft = !reverseLeft;
	  if (reverseLeft) bird.style.transform = 'scale(-1, 1)';
	  if (!reverseLeft) bird.style.transform = 'scale(1, 1)';
  	}
}, 1000);

// random number generator 0 - 99;
const randomNumber = () => {
  return Math.floor(Math.random() * 100);
};
