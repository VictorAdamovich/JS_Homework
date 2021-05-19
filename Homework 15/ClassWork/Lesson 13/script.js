var container = document.getElementById('container');
    

var firstPar = document.createElement('p'),
    secondPar = document.createElement('p');

firstPar.innerHTML = 'Hello, here are <a href="https://www.facebook.com">Link 1</a> and <a href="https://twitter.com">Link 2</a>';
secondPar.innerHTML = 'Hello, here are <a href="http://google.by">Link 3</a> and <a href="https://vk.com">Link 4</a>';

container.appendChild(firstPar);
container.appendChild(secondPar);



var button = document.getElementsByTagName('button')[0];
button.addEventListener('click', getLinks);
function getLinks(){
	var firstParLinks = firstPar.children;
	for (var item of firstPar.children){
		item.classList.add('colored');
	}
}

secondPar.onclick = function(event) {
	var target = event.target;
	if (target.tagName == 'A') {
		event.preventDefault();
		alert(event.target.getAttribute('href'));
	}
}


