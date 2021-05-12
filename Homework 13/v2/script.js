// Добавление блоков
var add = document.getElementById('add'),
    block = document.getElementsByTagName('td'),
    input = document.getElementsByClassName('hide');

add.addEventListener('click', function addRow(id) {
    //Даже не знаю как сделать более красиво ((
    var tbody = document.getElementById('tbody'),
        row = document.createElement('tr'),
        td1 = document.createElement('td'),
        td2 = document.createElement('td'),
        td3 = document.createElement('td');

    row.prepend(td1);
    row.prepend(td2);
    row.prepend(td3);
    tbody.prepend(row);
});

// Работа с input

function newInput(e, item, active) {
    if (e.addEventListener)
        e.addEventListener(item, active);
    else
        e.attachEvent(item, active);
}

var mainBlock = document.getElementById('tbody');

newInput(mainBlock, 'mouseup', function (e) {
    if (e.target.tagName.toLowerCase() == 'td') {
        input.value = block.textContent;
        e.target.appendChild(input);
        input.classList.remove('hide');
        input.focus();
    }
});

input.addEventListener('blur', function (e) {
    e.target.parentElement.textContent = input.value;
    input.classList.add('hide');
    document.body.appendChild(input);
    console.log(e.target);
});

document.addEventListener('keypress', function(e) {
    if(e.key == 'Enter') {
        input.classList.add('hidden');
    }
});
