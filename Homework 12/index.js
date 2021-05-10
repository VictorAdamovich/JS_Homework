//Задание 1
function replacement(name) {
    return name.map(function (name) {
        return {name: name}
    })
}

replacement(['Витя', 'Максим', 'Антон']);


//Задание 2
function timeArr(time) {

    var newTime = time.reduce(function (i, a) {
        return (i + ' : ' + a);
    });
    return 'Текущее время:' + newTime;
}

timeArr([' 00', '13', '24']);


//Задание 3 (Надеюсь решение не топорное)

function counterVowels(text) {
    var arr = text.toLowerCase().split('');
    var vowels = 'аеёиоуыэюя';

    var vowelsSum = arr.reduce(function (sum, val) {
        if (vowels.indexOf(val) !== -1) {
            sum++
        }
        return sum
    }, 0);

    return vowelsSum

}

counterVowels('Рядом со мной те, кто рядом');


//Задание 4
function countSentencesLetters(text) {
    var a = /[!.?:;0]/gi;
    var b = text.split(a);
    for (c of b) {
        //Немножко хардкода))
        if (c.length > 1) {
            console.log(c.trim() + ': Letters quantity is: ' + c.split(' ').join('').replace(/[^a-zа-яё]/gi, '').length);
        }
    }
}

countSentencesLetters('Привет, студент! Студент... Как дела, студент?');

//Задание 5