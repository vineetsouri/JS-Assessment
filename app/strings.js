exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var result = '';
    var character;
    var inputStrArray = str.split('');
    var charCount = {};
    for (var i = 0, len = inputStrArray.length; i < len; i++) {
      character = inputStrArray[i];
      if (typeof charCount[character] === 'undefined') {
        charCount[character] = 1;
      }
      else {
        charCount[character] = charCount[character] + 1;
      }
      
      if (charCount[character] <= amount) {
        result += character;
      }
    }
    return result;
  },
  wordWrap: function(str, cols) {

  },
  reverseString: function(str) {
    return str.split('').reverse().join('');
  }
};
