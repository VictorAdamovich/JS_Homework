//Некоторые моменты списал ((      Не успел до конца разобраться, но до контрольной подготовлюсь )

//Задание 1
function Animal(name) {
  this.name = name;

  this._foodAmount = 50;
}

Animal.prototype._formatFoodAmount = function () {
  return this._foodAmount + ' гр.';
};

Animal.prototype.dailyNorm = function (amount) {
  if (!arguments.length) return this._formatFoodAmount();

  if (amount < 50) {
    throw new Error('Значение должно быть больше 50');
  } else if (amount > 500) {
    throw new Error('Нельзя насыпать больше, чем 500');
  }

  this._foodAmount = amount;
};

Animal.prototype.feed = function () {
  console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма');
};

function Cat(name) {
  Animal.apply(this, arguments);
}

//Наследование
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.feed = function () {
  Animal.prototype.feed.apply(this);

  console.log('Кот доволен ^_^');
  return this;
};

Cat.prototype.stroke = function () {
  console.log('Гладим Котика:D');
  return this;
};

var murka = new Cat('Murka');
murka.dailyNorm(100);
murka.feed().stroke();
murka = null;

//Задание 2
var initialObj = {
  string: 'Vasya',
  number: 30,
  boolean: true,
  undefined: undefined,
  null: null,
  array: [1, 2, 3],
  object: {
    string2: 'Petrov',
    object2: {
      array2: [{}, {}],
    },
    object3: {},
  },
  method: function () {
    alert('Hello');
  },
};
var mass = clone(initialObj);

function clone(obj) {
  var cloneMass = {};
  for (var i in obj) {
    if (typeof obj[i] === 'object' && obj[i] !== null) {
      cloneMass[i] = clone(obj[i]);
      continue;
    }
    cloneMass[i] = obj[i];
  }
  return cloneMass;
}

mass[54] = 20;
console.log(mass);
console.log(initialObj);

//Задание 3
var initialObj = {
  string: 'Vasya',
  number: 30,
  boolean: true,
  undefined: undefined,
  null: null,
  array: [1, 2, 3],
  object: {
    string2: 'Petrov',
    object2: {
      array2: [{}, {}],
    },
    object3: {},
  },
  method: function () {
    alert('Hello');
  },
};

var initialObj2 = {
  string: 'Vasya',
  number: 30,
  boolean: true,
  undefined: undefined,
  null: null,
  array: [1, 2, 3],
  object: {
    string2: 'Petrov',
    object2: {
      array2: [{}, {}],
    },
    object3: {},
  },
  method: function () {
    alert('Hello');
  },
};

function comparingArrays(obj1, obj2) {
  if (Object.keys(obj1).length === Object.keys(obj2).length) {
    for (var i in obj1) {
      if (typeof obj1[i] === 'object' && obj1[i] !== null) {
        if (!comparingArrays(obj1[i], obj2[i])) {
          return false;
        }
      } else if (typeof obj1[i] === 'function') {
        if (obj1[i] + '' !== obj2[i] + '') {
          return false;
        }
      } else if (obj1[i] !== obj2[i]) {
        return false;
      }
    }
    return true;
  }
  return false;
}

console.log(comparingArrays(initialObj, initialObj2));
