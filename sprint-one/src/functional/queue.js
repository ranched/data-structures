var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var queueHead = 0;
  var queueRear = -1;
  var size = 0;
  
  var resize = function(){
    if(queueRear < queueHead){
      size = 0;
    } else if(queueRear === queueHead){
      size = 1;
    } else {
      size = queueRear - queueHead + 1;
    }
  }
  // Implement the methods below

  someInstance.enqueue = function(value) {
    queueRear++;
    storage[queueRear] = value;
    resize();
  };

  someInstance.dequeue = function() {
    if(size !== 0){
      var item = storage[queueHead];
      queueHead++;
      resize();
      return item;
    }
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
