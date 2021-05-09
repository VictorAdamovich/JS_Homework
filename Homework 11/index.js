// Задание 1
function filterNumbersArr(numbers) {
    var positiveArr = numbers.filter(function (number) {
        return number > 0;
    });
    console.log(positiveArr);
}

filterNumbersArr([-1, 0, 2, 34, -2]);


//Задание 2
function firstPositive(number) {
    var result = number.find(function (number) {
        return number > 0;
    })
    alert(result);
}

firstPositive([-1, 0, 2, 34, -2]);


//Задание 3
function isPalindrome(str) {
    var str = str.toLowerCase(),
        strReverse = str.split('').reverse().join('');

    if (strReverse == str) {
        return true;
    } else {
        return false
    }
}

isPalindrome('шалаШ');


// Задание 4
function areAnagrams(str, str2) {
    var firstArr = str.toLowerCase().split('').sort().join(''),
        secondArr = str2.toLowerCase().split('').sort().join('');

    if (firstArr.length !== secondArr.length) {
        return false
    }
    if (firstArr == secondArr) {
        return true;
    }
    return false;
}

console.log(areAnagrams('кот', 'отк'));
console.log(areAnagrams('кот', 'атк'));
console.log(areAnagrams('кот', 'отко'));


//Задание 5
function divideArr(arr, arrLong) {
    var newArr = [];

    while (arr.length > 0)
        newArr.push(arr.splice(0, arrLong));

    return newArr;
}

divideArr([1, 2, 3, 4], 2); // [[1, 2], [3, 4]]
divideArr([1, 2, 3, 4, 5, 6, 7, 8], 3); // [[1, 2, 3], [4, 5, 6], [7, 8]]
