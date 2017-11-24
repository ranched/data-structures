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
    for (var child of this.children) {
      if (child.contains(target)) {
        return true;
      }
    }
  }
  return false;
};
/*
 * Complexity: What is the time complexity of the above functions?
 * parentheses indicate inner function being called within function
 *
 * extend - linear  O(n)
 * Stack - constant O(1)
 *  someInstance.push - constant O(1)
 *  someInstance.pop - constant O(1)
 *  someInstance.size - constant O(1)
 * Tree - linear O(n)
 *  (extend) - linear O(n)
 * treeMethods.addChild - constant O(1)
 * treeMethods.contains - linear O(n)
 */

