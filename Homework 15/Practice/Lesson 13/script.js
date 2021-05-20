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

pSecond.onclick = function (event) {
    var target = event.target;
    if (target.tagName === 'A') {
        event.preventDefault();
        alert(event.target.getAttribute('href'));
    }
}


