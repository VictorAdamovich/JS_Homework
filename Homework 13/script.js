var input = document.querySelector('.hide'),
    block = document.querySelector('.block'),
    addBlock = document.querySelector('.addBlock');

function newInput(e, block, active){
    if(e.addEventListener)
        e.addEventListener(block, active);
    else
        e.attachEvent(block, active);
}

var c = document.getElementById('table');

newInput(c, 'mouseup', function(e) {
    if(e.target.tagName.toLowerCase() == 'div')
    {
        input.value = block.textContent;
        e.target.appendChild(input);
        input.classList.remove('hide');
        input.focus();

    }
});

input.addEventListener('blur', function () {
    this.parentElement.textContent = this.value;
    this.classList.add('hide');
    document.body.appendChild(this);
});


addBlock.addEventListener('click', function(e) {
    var newLine = document.createElement('div');
    newLine.innerHTML = '<div class="table__block block">';
    c.prepend(newLine);
});