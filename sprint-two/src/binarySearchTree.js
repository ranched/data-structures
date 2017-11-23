var BinarySearchTree = function(value) {
  var tree = Object.create(treeMethods);
  tree.parent = null;
  tree.left = null;
  tree.right = null;
  tree.value = value;

  return tree;
};

var treeMethods = {

  insert : function(value){
    if(this.value > value){
      if(this.left){
        this.left.insert(value);
      } else {
        this.createChildNode(value, 'left');
      }
    } else {
      if(this.right){
        this.right.insert(value);
      } else {
        this.createChildNode(value, 'right');
      }
    }
  },

  contains : function(value){
    if (this.value === value) {
      return true;
    } else if (this.value > value){
      return this.left ? this.left.contains(value) : false;
    } else {
      return this.right ? this.right.contains(value) : false;
    }
  },

  depthFirstLog : function(func){
    func(this.value);
    if(this.left !== null){
      this.left.depthFirstLog(func);
    }
    if(this.right !== null){
      this.right.depthFirstLog(func);
    }
  },

  createChildNode : function(value, side){
    let node = BinarySearchTree(value);
    node.value = value;
    node.parent = this;
    this[side] = node;
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
