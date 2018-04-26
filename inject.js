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

// random number generator 0 - 99;
const randomNumber = () => {
  return Math.floor(Math.random() * 100);
};

let score = 0;
const scoreDiv = document.createElement('div');
scoreDiv.style.position = 'fixed';
scoreDiv.style.bottom = '100px';
scoreDiv.style.right = '100px';
scoreDiv.style.backgroundColor = 'black';
scoreDiv.style.color = 'white';
scoreDiv.innerHTML = "<p>Score: " + score + "</p>";
scoreDiv.style.zIndex = '100';
document.body.appendChild(scoreDiv);
document.getElementById('bird').addEventListener('click', function() {
  // Create dead bird image at the bottom of the screen at the same x position of clicked bird
  let deadBird = document.createElement('img');
  deadBird.style.height = '100px';
  deadBird.style.width = '100px';
  deadBird.style.position = 'fixed';
  let yPosition = document.getElementById('bird').getBoundingClientRect().top;
  deadBird.style.top = yPosition + "px";
  let xPosition = document.getElementById('bird').getBoundingClientRect().left;
  deadBird.style.left = xPosition + "px";
  deadBird.src = 'https://betanews.com/wp-content/uploads/2014/01/dead-bird.jpg';
  document.body.appendChild(deadBird);
  // Delete bird from document
  var toDelete = document.getElementById('bird');
  toDelete.parentElement.removeChild(toDelete);
  // Create new bird
  // Update score
  score += 100;
  scoreDiv.innerHTML = "<p>Score: " + score + "</p>";
});
