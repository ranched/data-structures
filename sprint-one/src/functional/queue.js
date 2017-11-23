var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var queueHead = 0;
  var queueRear = -1;
  var size = 0;
  
  var resize = function(){
    //if queue empty
    if(queueRear < queueHead){
      size = 0;
      //else if queue has one item
    } else if(queueRear === queueHead){
      size = 1;
      //else end minus beginning equals queue length (plus one for offset)
    } else {
      size = queueRear - queueHead + 1;
    }
  };
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
