
var extend = function(obj, methods){
  for (var key in methods){
    obj[key] = methods[key];
  }
}


var stackMethods = {
  push: function(value){
    this.currentSize++
    let index = this.currentSize
    this[index] = value;
  }, 

  pop: function(){
    let index = this.currentSize;
    let item = this[index];
    delete this[index];
    if(this.currentSize !== 0){
      this.currentSize--
    }
    return item;
  }, 

  size: function(){
    return this.currentSize;
  }, 

  getLastRemovedItem: function(){
    return this[this.currentSize + 1];
  }
};

var Stack = function() {
  var stack = {};
  stack.currentSize = 0;
  extend(stack, stackMethods);
  return stack;
};

