var box = document.getElementById('box');


var pFirst = document.createElement('p'),
	pSecond = document.createElement('p');

pFirst.innerHTML = 'Hello, here are <a href="https://www.facebook.com">Link 1</a> and <a href="https://twitter.com">Link 2</a>';
pSecond.innerHTML = 'Hello, here are <a href="http://google.by">Link 3</a> and <a href="https://vk.com">Link 4</a>';

box.appendChild(pFirst);
box.appendChild(pSecond);




var button = document.getElementsByTagName('button')[0];
button.addEventListener('click', function getLinks() {
		for (var item of pFirst.children) {
			item.classList.add('gold');
		}
	}
);

pSecond.onclick = function(event) {
	var target = event.target;
	if (target.tagName === 'A') {
		event.preventDefault();
		if(localStorage.getItem(event.target.textContent) === null){
			localStorage.setItem(event.target.textContent, JSON.stringify ({ path: event.target.getAttribute('href') }));
			event.target.setAttribute('href', '#');
			alert('Cсылка была сохранена');
		} else {

			var pathObject = JSON.parse(localStorage.getItem(event.target.textContent));
			alert(pathObject.path);
		}
		
	}		
	
};

window.onload = function() {
  localStorage.clear();
};


