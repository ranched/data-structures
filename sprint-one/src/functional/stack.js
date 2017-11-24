var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var _storage = {};
  //set the initial stack size to 0
  var _size = 0;

  //add values to the stack
  someInstance.push = function(value) {
    //increase the stack size by one
    _size++;
    //put the new value at the top of the stack
    _storage[_size] = value;
  };

  //remove values from the stack
  someInstance.pop = function() {
    //if the stack is not empty
    if (_size !== 0) {
      //set temp variable equal to top value
      var item = _storage[_size];
      //delete the top stack item
      delete _storage[_size];
      //decrement the stack size counter
      _size--;
      return item;
    }
  };

  someInstance.getLastRemovedItem = function() {
    return _storage[_size + 1];
  };

  someInstance.size = function() {
    return _size;
  };

  return someInstance;
};
