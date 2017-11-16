var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.queueHead = 0;
  this.queueRear = -1;
  this.length = 0;
};


Queue.prototype.enqueue = function(value){
  this.queueRear++;
  this[this.queueRear] = value;
  this.resize();
};

Queue.prototype.dequeue = function(){
  let item = this[this.queueHead];
  delete this[this.queueHead];
  if(this.length !== 0){
    this.queueHead++;
  }
  this.resize();
  return item;
};

Queue.prototype.size = function(){
  return this.length;
};

Queue.prototype.resize = function(){
  let head = this.queueHead;
  let rear = this.queueRear;
  if(head > rear){
    this.length = 0;
  } else if( head === rear){
    this.length = 1;
  } else {
    this.length = (rear - head + 1);
  }
};
