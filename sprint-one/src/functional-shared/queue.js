var extend = function(obj, methods){
  for(var key in methods){
    obj[key] = methods[key];
  }
}

var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = {};
  queue.queueHead = 0;
  queue.queueRear = -1;
  queue.length = 0;
  extend(queue, queueMethods);
  return queue;
};

 var queueMethods = {
  resize: function(){
    if(this.queueHead > this.queueRear){
      this.length = 0;
    } else if(this.queueHead === this.queueRear){
      this.length = 1;
    } else {
      this.length = this.queueRear - this.queueHead + 1;
    }
  },

  enqueue: function(value){
    this.queueRear++;
    let index = this.queueRear;
    this[index] = value;
    this.resize();
  },

  dequeue: function(){
    let index = this.queueHead;
    let item = this[index];
    if(this.length !== 0){
      this.queueHead++;
    }
    delete this[index];
    this.resize();
    return item;
  },

  size: function(){
    return this.length;
  }
};