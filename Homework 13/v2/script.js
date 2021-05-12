function addRow(id) {
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
}


var input = document.querySelector('.hide'),
    td = document.getElementById('td');
