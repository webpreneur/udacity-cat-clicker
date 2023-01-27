const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
const thousands = ['', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion', 'decillion', 'undecillion', 'duodecillion', 'tredecillion', 'quattuordecillion', 'quindecillion'];

export function numberToWord(num) {
  
    if (num === 0) return "zero";
    if (num < 0) return "minus " + numberToWord(-num);
  
    let word = "";
    let i = 0;
    while (num > 0) {
      if (num % 1000 !== 0) {
        word = numberToWordHelper(num % 1000) + thousands[i] + " " + word;
      }
      num = Math.floor(num / 1000);
      i++;
    }
    return word.trim();
  }
  
  function numberToWordHelper(num) {
    if (num === 0) return "";
    if (num < 0) return "minus " + numberToWordHelper(-num);
    if (num < 20) return ones[num] + " ";
    if (num < 100) return tens[Math.floor(num / 10)] + " " + numberToWordHelper(num % 10);
    if (num < 1000) return ones[Math.floor(num / 100)] + " hundred " + numberToWordHelper(num % 100);
  }
  