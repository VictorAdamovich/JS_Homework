
    ДОМАШНЕЕ ЗАДАНИЕ
Задание 1:
Написать функцию, принимающую массив имен и возвращающую массив объектов вида {name: 'Vasya'}.

Задание 2:
Написать функцию, принимающую массив вида ['00', '13', '24'] и возвращающую строку "Текущее время : 00 : 13 : 24".
    Для решения использовать перебирающий метод массивов.

    Задание 3:
Написать функцию, которая будет возвращать количество гласных в переданном тексте. Регистр любой. Решение не
должно быть "топорным".

    Задание 4:
Написать функцию, которая будет принимать текст в качестве параметра. У текста должны быть пробелы, точки, запятые,
    восклицательные и вопросительные знаки. Текст необходимо разбить на предложения (по точкам, восклицательным и
вопросительным знакам - убрав их).
Для каждого из предложений - отдельно вывести текст предложения и рядом количество букв в нем (без учета пробелов,
    запятых и т.д. - именно букв). Из ранее непройденных методов разрешается использовать только (!!!) регулярное выражение
в методе split.

    Функция должна работать следущим образом (потестировать на данном тексте):
countSentencesLetters('Привет, студент! Студент... Как дела, студент?');
// Привет, студент: Letters quantity is: 13
// Студент: Letters quantity is: 7
// Как дела, студент: Letters quantity is: 14

Задание 5 *:
Написать функцию, которая будет находить в переданном ей тексте наиболее часто повторяемое слово и возвращать
информацию вида:
    "Максимальное число повторений у слова "привет" - 8"
При решении предположить, что у двух и более слов не может быть одинакового количества повторений.
    Для удобного разделения текста на слова сразу по нескольким знакам препинания - разрешается использовать регулярное
выражение в методе split.