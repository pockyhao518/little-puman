function sortRoman(names) {
    // Write your code here
    let obj = {}
    names = names.sort();
    for (let i = 0; i < names.length; i++){
        let el = names[i];
        let info = el.split(' ');
        let name = info[0];
        let num = info[1];
        if (obj[name] === undefined){
            obj[name] = [toNum(num)]
        }else{
            obj[name].push(toNum(num))
        }
    }
    let result = [];
    for (let key in obj){
        let arr = obj[key].sort(function (a, b) {return a - b;});
        for (let i = 0; i < arr.length; i++){
            result.push(key + ' ' + convertToRoman(arr[i]))
        }
    }
    return result;
}

const toNum = (string) => {
    if(string == null) return -1;
    let num = char_to_int(string.charAt(0));
    let pre, curr;

    for(var i = 1; i < string.length; i++){
        curr = char_to_int(string.charAt(i));
        pre = char_to_int(string.charAt(i-1));
        if(curr <= pre){
            num += curr;
        } else {
            num = num - pre*2 + curr;
        }
    }
    return num;
}

function char_to_int(c){
    switch (c){
        case 'I': return 1;
        case 'V': return 5;
        case 'X': return 10;
        case 'L': return 50;
        default: return -1;
    }
}

const convertToRoman = (num) => {
  const decimalValue = [50, 40, 10, 9, 5, 4, 1];
  const romanNumeral = [
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I"
  ];
  let romanized = "";
  for (let i = 0; i < decimalValue.length; i++) {
    while (decimalValue[i] <= num) {
      romanized += romanNumeral[i];
      num -= decimalValue[i];
    }
  }
  return romanized;
};