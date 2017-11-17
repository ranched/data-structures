var extend = function(obj, methods) {
  for (var key in methods) {
    obj[key] = methods[key];
  }
};


var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  let currentValue = this.value;
  if (currentValue === target) {
    return true;
  } else if (this.children.length !== 0) {
    let present = false;
    this.children.forEach(function(child) {
      if (present !== true) {
        present = child.contains(target);
      }    
    });
    return present;
  } else {
    return false;
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 * parentheses indicate inner function being called within function
 *
 * extend - linear
 * Stack - constant
 *  someInstance.push - constant
 *  someInstance.pop - constant
 *  someInstance.size - constant
 * Tree - linear
 *  (extend) - linear
 * treeMethods.addChild - constant
 * treeMethods.contains - linear
 */

