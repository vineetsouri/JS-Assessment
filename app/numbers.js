exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    return 1 & (num >> (bit - 1));
  },

  base10: function(str) {
    return parseInt(str, 2);
  },

  convertToBinary: function(num) {
    return ("000000000" + num.toString(2)).substr(-8)
    // return parseInt(num, 10).toString(2); gives only 7 bits for 65 number
  },

  multiply: function(a, b) {
    return Math.round(10000 * (a * b))/10000;
  }
};
