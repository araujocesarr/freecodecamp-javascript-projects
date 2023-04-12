function palindrome(str) {
  //Remove all non-alphanumeric characters
  let regex = /[^A-Za-z0-9]/g;
  let newStr = str.replace(regex, "");

  //Everything to same case
  newStr = newStr.toLowerCase();
  
  //Check word or expression
  let reverseStr = newStr.split("").reverse().join("");
  if (newStr === reverseStr) {
    return true;
  } 
    return false;
}

console.log(palindrome("race car"));
