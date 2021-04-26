function Animal(name) {
  var self = this;
  self._foodAmount = 0;

  self._formatFoodAmount = function () {
    return self._foodAmount + ' гр.';
  };

  self.dailyNorm = function (amount) {
    if (!arguments.length) return self._formatFoodAmount();

    if (amount < 50 || amount > 500) {
      return 'Недопустимое количество корма.';
    }

    self._foodAmount = amount;
  };

  this.name = name;

  self.feed = function () {
    console.log('Насыпаем в миску ' + self.dailyNorm() + ' корма.');
  };
}

function Cat(name) {
  Animal.apply(this, arguments);
  this.stroke = function () {
    console.log('Гладим кота');
    return this;
  };

  var animalFeed = this.feed;

  this.feed = function () {
    animalFeed();
    satisfied();
    return this;
  };
  function satisfied() {
    console.log(' Кот доволен ^_^');
  }
}
var barsik = new Cat('Барсик');
