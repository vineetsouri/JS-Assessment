exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
    var timed;
    function clockTick () {
      console.log(start++);

      if (start <= end) {
        timed = setTimeout(clockTick,100);
      };
    }
    clockTick();

    return {
      cancel : function() {
        clearTimeout(timed);
      }
    }
  }
};
