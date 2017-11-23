var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let stack = Object.create(stackMethods);
  stack.length = 0;

  return stack;
};

var stackMethods = {
  push: function(value) {
    this.length++;
    this[this.length] = value;
  },

  pop: function() {
    let item = this[this.length];
    delete this[this.length];
    if (this.length !== 0) {
      this.length--;
    }
    return item;
  },

  size: function() {
    return this.length;
  },

  getLastRemovedItem: function() {
    return this[this.length + 1];
  }
};


