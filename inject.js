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
const bird = document.createElement('img');
bird.src = 'https://opengameart.org/sites/default/files/GIF-sample.gif';
bird.id = 'bird';
bird.style.position = 'fixed';
// initialze position of bird to top left
bird.style.top = 0;
bird.style.left = 0;
// initialize size of bird
bird.style.width = '150px';
bird.style.height = '100px';
document.body.appendChild(bird);

// move the bird every two seconds
setInterval(() => {

}, 2000);