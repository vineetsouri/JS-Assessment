exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(null, arr);
  },

  speak : function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction : function(str) {
    return function(argument) {
      return str + ', ' + argument;
    }
  },

  makeClosures : function(arr, fn) {
    var result = [];
    var closureFunction = function(value) {
      return function() {
        return fn(value);
      }
    }

    for (var i = 0; i < arr.length; i++) {
      result.push(closureFunction(arr[i]));
    }
    return result;
  },

  partial : function(fn, str1, str2) {
    return function(str3) {
      return fn.call(null,str1,str2,str3);
    }
  },

  useArguments : function() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    return sum;
  },

  callIt : function(fn) {
    //Array like objects
    var array = Array.prototype.slice.call(arguments, 1, arguments.length);
    return fn.apply(null,array);
  },

  partialUsingArguments : function(fn) {
    
  },

  curryIt : function(fn) {
    
  }
};
