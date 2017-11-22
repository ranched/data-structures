var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  //set the initial stack size to 0
  var size = 0;

  //add values to the stack
  someInstance.push = function(value) {
    //increase the stack size by one
    size++;
    //put the new value at the top of the stack
    storage[size] = value;
  };

  //remove values from the stack
  someInstance.pop = function() {
    //if the stack is not empty
    if(size !== 0){
      //set temp variable equal to top value
      var item = storage[size];
      //delete the top stack item
      delete storage[size];
      //decrement the stack size counter
      size--;
      return item;
    }
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
