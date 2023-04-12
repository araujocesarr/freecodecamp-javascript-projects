//array with alphabet
const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function rot13(str) {
  //string to return
  let result = "";

  //for para recorrer el string
  for (let i = 0; i < str.length; i++) {
    //agregar caracter al resultado si no es una letra del alfabeto
    if (!alphabet.includes(str[i])) {
      result += str[i];
    } else {
      let alphaIndex = alphabet.indexOf(str[i]);
      //agregar letra del alfabeto al resultado
      if (alphaIndex < 13) {
        result += alphabet[alphaIndex + 13];
      }
      if (alphaIndex >= 13) {
        result += alphabet[alphaIndex - 13];
      }
    }
  }
  return result;
}

//console.log(rot13("SERR PBQR PNZC!"));
//console.log(rot13("SERR CVMMN!"));
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
