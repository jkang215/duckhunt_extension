
// create the bird
const bird = document.createElement("img");
// bird.src = "https://opengameart.org/sites/default/files/GIF-sample.gif";
bird.src = "http://bestanimations.com/Animals/Birds/Doves/animated-dove-gif-9.gif"
bird.id = "bird";
bird.style.position = "fixed";
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

// create a score
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
// add on click to bird
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

// let hick = document.createElement('div');
// hick.innerHTML = '<iframe src="http://lingojam.com/embed/" style="width:700px; height:300px;"></iframe>';
// hick.style.zIndex = '1000000';
// document.body.appendChild(hick);

// translate the page to duck hunter speak
function replaceTextOnPage(from, to){
	getAllTextNodes().forEach(function(node){
	  node.nodeValue = node.nodeValue.replace(new RegExp(quote(from), 'g'), to);
	});
  
	function getAllTextNodes(){
	  var result = [];
  
	  (function scanSubTree(node){
		if(node.childNodes.length) 
		  for(var i = 0; i < node.childNodes.length; i++) 
			scanSubTree(node.childNodes[i]);
		else if(node.nodeType == Node.TEXT_NODE) 
		  result.push(node);
	  })(document);
  
	  return result;
	}
  
	function quote(str){
	  return (str+'').replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
	}
  }

  // pick the words to replace
  replaceTextOnPage('you', "y'all");
  replaceTextOnPage('You', "Y'all");
  replaceTextOnPage('hello', "howdy");
  replaceTextOnPage('Hello', "Howdy");
  replaceTextOnPage('to', "ta");
  replaceTextOnPage('your', "yer");
  replaceTextOnPage('Your', "Yer");
  replaceTextOnPage('ing', "in'");
  replaceTextOnPage("I'm", "imma");
  replaceTextOnPage("the", "tha");
  replaceTextOnPage("The", "Tha");
  replaceTextOnPage("er", "a");

