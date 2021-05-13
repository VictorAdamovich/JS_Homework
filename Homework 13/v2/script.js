// Добавление блоков
/*var add = document.getElementById('add');

add.addEventListener('click', function addRow(id) {
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
*/
// Второй вариант добавления (Почему то работает то нет , но красивый) )

add.addEventListener('click', function addRow2() {
  var tbody = document.getElementById('tbody');
  tbody.insertAdjacentHTML(
    'afterbegin',
    '<tr><td></td><td></td><td></td></tr>'
  );
});

// Работа с input
var td = document.querySelectorAll('td');

for (var i = 0; ; i++) {
  if (i !== td.length - 1) {
    td[i].addEventListener('click', function addInput() {
      // Фокус
      var input = document.createElement('input');
      input.value = this.innerHTML;
      this.innerHTML = '';
      this.appendChild(input);
      input.focus();
      //Блюр
      var self = this;
      input.addEventListener('blur', function delInput() {
        self.innerHTML = this.value;
        self.addEventListener('click', addInput);
      });
      // Закритие при Enter
      document.querySelector('input').addEventListener('keydown', function (e) {
        if (e.code == 'Enter') {
          self.innerHTML = this.value;
          self.addEventListener('click', addInput);
        }
      });

      this.removeEventListener('click', addInput);
    });
  }
}
