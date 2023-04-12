function convertToRoman(num) {
  let arrNumbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let arrRoman = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  let result = []; // result array

  //ciclo while para ejecutar funcion hasta que num sea cero
  while (num > 0) {
    //metodo find para encontrar ir llenando el array de resultado
    arrNumbers.find((number, index) => {
      if (num >= number) {
        result.push(arrRoman[index]);
        //reducir num con el number encontrado
        num -= number;
        return result;
      }
    });
  }
  //pasar de array a string con join
  result = result.join("");
  return result;
}

console.log(convertToRoman(97));

