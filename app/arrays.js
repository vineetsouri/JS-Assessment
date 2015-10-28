exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        return i;
      }
    }
    return -1;
  },

  sum : function(arr) {
    var sum = 0;

    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }

    return sum;
  },

  remove : function(arr, item) {
    var arr2 = [];

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] !== item) {
        arr2.push(arr[i]);
      }
    }

    return arr2;
  },

  removeWithoutCopy : function(arr, item) {
    for (var i = 0, len = arr.length; i < len; i++){
      if (arr[i] == item) {
        arr.splice(i,1); //removes the current element
        i = i-1; //reseting the i value to back position
        len = len-1; ///reseting the len after removing value
      };
    }
    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    concated = arr1.concat(arr2);
    return concated;
  },

  insert : function(arr, item, index) {
    arr.splice(index,0,item);
    return arr;
  },

  count : function(arr, item) {
    count = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] == item) {
        count++;
      };
    };
    return count;
  },

  duplicates : function(arr) {
    sorted_array = arr.sort();
    var results = [];
    for (var i = 0; i < sorted_array.length -1; i++) {
      if (sorted_array[i + 1] == sorted_array[i]) {
        results.push(sorted_array[i]);
      }
    }
    return results;
  },

  square : function(arr) {
    var sqr = [];

    for (var i = 0; i < arr.length; i++) {
      sqr.push(arr[i] * arr[i]);
    }

    return sqr;
  },

  findAllOccurrences : function(arr, target) {
    var result = [];

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        result.push(i);
      }
    }

    return result;
  }
};
