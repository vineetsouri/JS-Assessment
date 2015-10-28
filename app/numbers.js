exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    return 1 & (num >> (bit - 1));
  },

  base10: function(str) {
    return parseInt(str, 2);
  },

  convertToBinary: function(num) {
    return parseInt(num, 10).toString(2);
  },

  multiply: function(a, b) {
    return (a*b).toFixed(4);
  }
};
