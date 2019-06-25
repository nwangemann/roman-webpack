// create  global variable so we can convert
var numberArray = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
var romanArray = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];

export function toRoman(number){
  var resultAnswer = '';
  for(var x = 0; x<=numberArray.length; x++){
    while (number%numberArray[x] < number) {
      resultAnswer += romanArray[x];
      number -= numberArray[x];
    }
  }
  return resultAnswer;
}
