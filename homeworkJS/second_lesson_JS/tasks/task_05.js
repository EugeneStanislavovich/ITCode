/*
* Написать функцию, которая принимает массив чисел, например [1,2,3,4,5] и функция возращает полусумму, (округлить результат до десятых)
* */


function abs(array) {

  let sum = array.reduce((a, b) => a + b, 0); 
  let half = sum / 2;

  return Math.round(half * 10) / 10; 
}








































module.exports = abs