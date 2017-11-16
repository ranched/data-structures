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

  },

  enqueue: function(){

  },

  dequeue: function(){

  },

  size: function(){
    return this.length;
  }
};