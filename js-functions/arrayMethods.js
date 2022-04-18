Array.prototype.myMap = function (callback) {
      const newArr = [];
      for(let i = 0; i < this.length; i++ ){
          newArr.push(callback(this[i], i, this))
      }
  
      return newArr;
  }
  
  Array.prototype.myFilter = function(callBack) {
      const newArr = [];
      for(let i = 0; i < this.length; i++) {
          if(callBack(this[i], i, this) === true) {
              newArr.push(this[i])
          }
      }
      return newArr;
  }
  
  Array.prototype.myReduce = function (callback, initialValue) {
    // Write your code here.
      let accumulator = initialValue
      for(let i = 0; i < this.length; i++ ) {
          if(i === 0 && initialValue === undefined) {
              accumulator = this[0];
          } else {
              accumulator = callback(accumulator, this[i], i, this)
          }
      }
      return accumulator;
  }
  