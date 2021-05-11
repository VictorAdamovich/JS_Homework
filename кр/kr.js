/*Задание 1:
  Описать класс Person в функциональном стиле.
  У него должны быть публичное свойство name и приватное свойство personAge, значение которым будет задаваться при
  создании объекта класса.
  Также должен быть реализован приватный метод getFormattedAge, который будет возвращать возраст + слово 'лет'
  и публичный метод showInfo, выводящий в консоль (!!!) информацию вида:
    "Привет, меня зовут Вася, мне 20 лет."

  Отнаследовать от Person класс Employee. Расширить контруктор публичным свойством salary, которое так же будет получаться
  при создании объекта класса. И расширить метод родителя showInfo так, чтобы он выводил информацию вида:
    "Привет, меня зовут Вася, мне 20 лет.
     Моя зарплата 2000$."
   Использовать вызов родительского метода вида personShowInfo().

Задание 2:
  Переписать задание 1 на прототипный стиль.
*/

//Задание 1
function Person(name, personAge) {
    var self = this;
    this.name = name;
    var personAge = personAge;

    function getFormattedAge() {
        return personAge + ' лет';
    }

    self.showInfo = function () {
        console.log('Привет, меня зовут ' + self.name + ', мне ' + getFormattedAge() + '.');
    }
}

function Employee(name, personAge, salary) {
    Person.apply(this, arguments);

    this.salary = salary;

    var personShowInfo = this.showInfo;

    this.showInfo = function () {
        personShowInfo();
        console.log('Моя зарплата ' + salary + '$.');
    }
}

var vasya = new Employee('Вася', 20, 2000);

console.log(vasya.name);
console.log(vasya.showInfo());