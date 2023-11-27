/*
* Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

It is much easier to understand with an example:

* For seconds = 62, your function should return
    "1 minute and 2 seconds"
* For seconds = 3662, your function should return
    "1 hour, 1 minute and 2 seconds"
For the purpose of this Kata, a year is 365 days and a day is 24 hours.

Note that spaces are important.

Detailed rules
The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.
* */

/* 
Написать функцию, которая форматирует продолжительность, заданную в виде количества секунд, удобным для человека способом.

Функция должна принимать неотрицательное целое число. Если оно равно нулю, то просто возвращает "сейчас". 
В противном случае продолжительность выражается в виде комбинации лет, дней, часов, минут и секунд.

Пример:

* Для секунд = 62 ваша функция должна возвращать:
    "1 minute and 2 seconds"
* Для секунд = 3662 ваша функция должна возвращать:
    "1 hour, 1 minute and 2 seconds"

Обсуловимся, что год равен 365 дням, а сутки - 24 часам.

Пробелы важны.

Подробные правила:
    1. Окончания должны быть корректными. То есть, если единица измерения должна быть во множественном числе, если значение больше 1 (1 seconD, 2 seconDS и т.д.)
    2. Компоненты разделяются запятой и пробелом (", "). За исключением последнего компонента, который разделяется знаком "и".
    3. Более значимые единицы времени должны идти раньше, чем менее значимые. 
    Следовательно, 1 секунда и 1 год - это неверно, а 1 год и 1 секунда - верно.
    4. Разные компоненты имеют разную единицу измерения времени. 
    Таким образом, нет повторяющихся единиц измерения, как через 5 секунд и 1 секунду.
    5. Компонент вообще не будет отображаться, если его значение равно нулю. 
    Следовательно, 1 минута и 0 секунд недопустимо, это должна быть просто 1 минута.
    6. Единица времени должна использоваться "не больше возможного". 
    Это означает, что функция должна возвращать не 61 секунду, а 1 минуту и 1 секунду. 
    Формально, продолжительность, указанная компонентом, не должна превышать любую допустимую более значимую единицу времени.

*/

function formatDuration (seconds) {
    return ""
}



















































































































module.exports = formatDuration