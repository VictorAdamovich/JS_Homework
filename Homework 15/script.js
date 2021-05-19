var button = document.getElementById('button');

//Валидация
document.getElementById('block').addEventListener('keyup', function () {
    var x = document.getElementById('x').value,
        y = document.getElementById('y').value;

    if ((x > 0) && (y > 0)) {
        button.removeAttribute('disabled');
    }
});

//Добовление таблицы и alert
button.addEventListener('click', function () {
    var x = document.getElementById('x').value,
        y = document.getElementById('y').value;

     if ((x > 10) || (y >10)){
            alert('Мы поддерживам любыче числа, но в задаче ограничение до 10 (: ')
         return;
        };

    var t = document.getElementById('tbody');

    while (t.firstChild) {
        t.removeChild(t.firstChild);
    }
    
    for (var i = 0; i < y; i++) {
        var newTr = document.createElement('TR');
        t.appendChild(newTr);
        for (var j = 0; j < x; j++) {
            newTr.insertAdjacentHTML('afterbegin', '<td></td>');
        }
    }
});

//Переключатель
var tgl = document.getElementById('table');

tgl.addEventListener('click', function () {
    if (tgl.className == 'even') {
        tgl.classList.remove('even');
        tgl.classList.add('odd');
        return;
    } else {
        tgl.classList.remove('odd');
        tgl.classList.add('even');
        return;
    }
});