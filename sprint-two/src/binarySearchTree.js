var BinarySearchTree = function(value) {
  var tree = Object.create(binaryTreeMethods);
  tree.parent = null;
  tree.left = null;
  tree.right = null;
  tree.value = value;

  return tree;
};

var binaryTreeMethods = {

  // add node to the tree
  insert: function(value) {
    // compare value to insert against current node's value
    if (this.value > value) {
      // if its less than the current value look to the left child
      if (this.left) {
        // if the left child already exists, call insert on that node
        this.left.insert(value);
      } else {
        // if no left child, insert new node
        this.createChildNode(value, 'left');
      }
    } else {
      // if the value to insert is greater than the current value look 
      // to the right child
      if (this.right) {
        // if the right child already exists, call insert on that node
        this.right.insert(value);
      } else {
        // if no right child, insert new node
        this.createChildNode(value, 'right');
      }
    }
  },
  // check tree for value
  contains: function(value) {
    // if the current node's value is the target value
    if (this.value === value) {
      return true;
      //if the current nodes value is greater than target value
    } else if (this.value > value) {
      //if a left child exists, call contains on it, otherwise return false
      return this.left ? this.left.contains(value) : false;
    } else {
      //if a right child exists, call contains on it, otherwise return false
      return this.right ? this.right.contains(value) : false;
    }
  },
  //log all nodes 
  depthFirstLog: function(func) {
    //log this nodes value
    func(this.value);
    // if a left child exists...
    if (this.left !== null) {
      // call depthFirstLog on it
      this.left.depthFirstLog(func);
    }
    // if a left child exists...
    if (this.right !== null) {
      // call depthFirstLog on it
      this.right.depthFirstLog(func);
    }
  },
  // log node values enroute to locating target node value
  pathToNodeLog: function(target, nodePath = []) {
    // if the current node's value is the target value...
    if (this.value === target) {
      // add this value to the nodePath
      nodePath.push(this.value);
      // return the nodePath
      return nodePath;
    }
    // add this value to the nodePath
    nodePath.push(this.value);
    // if a left child exists and the target value is less 
    // than the current node's value...
    if (this.left !== null && this.value > target) {
      //return the result of recursively calling pathToNodeLog
      // on the left child
      return this.left.pathToNodeLog(target, nodePath);
    }
    // if a right child exists and the target value is greater 
    // than the current node's value...
    if (this.right !== null && this.value < target) {
      //return the result of recursively calling pathToNodeLog
      // on the right child
      return this.right.pathToNodeLog(target, nodePath);
    }
    return nodePath;
  },

  createChildNode: function(value, side) {
    //create new node 
    let node = BinarySearchTree(value);
    node.value = value;
    node.parent = this;
    //sets the new node to either left or right child of parent
    this[side] = node;
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * BinarySearhTree constant O(1)
 * insert logarithmic O(log n)
 * contains logarithmic O(log n)
 * depthFirstLog linear O(n)
 * createChildNode constant O(1)
 */
