
var extend = function(obj, methods){
  for (var key in methods){
    obj[key] = methods[key];
  }
}


var stackMethods = {
  push: function(value){
    this.currentSize++
  }, 

  pop: function(){
    if(this.currentSize !== 0){
    this.currentSize--
  }
  }, 

  size: function(){
    return this.currentSize;
  }
};

var Stack = function() {
  var stack = {};
  stack.currentSize = 0;
  extend(stack, stackMethods);
  return stack;
};

