var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = Object.create(queueMethods);
  queue.queueHead = 0;
  queue.queueRear = -1;
  queue.length = 0;
  return queue;
 };

 var queueMethods = {
  enqueue: function(value){
    this.queueRear++;
    var index = this.queueRear;
    this[index] = value;
    this.resize();
  },

  dequeue: function(){
    var index = this.queueHead;
    var item = this[index];
    delete this[index];
    if(this.length !== 0){
      this.queueHead++;
    }
    this.resize();
    return item;
  },

  resize: function(){
    let head = this.queueHead;
    let rear = this.queueRear
    if(head > rear){
      this.length = 0;
    } else if(head === rear){
      this.length = 1
    } else {
      this.length = rear - head + 1;
    }
  },

  size: function(){
    return this.length;
  }
 };


