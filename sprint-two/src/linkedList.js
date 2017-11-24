var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (!list.head && !list.tail) {
      list.tail = list.head = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    if (!list.head) {
      return;
    }
    var removed = list.head.value;
    list.head = list.head.next;
    return removed;
  };

  list.contains = function(target) {
    var found = false;
    var node = list.head;
    while (!found && node) {
      if (node.value === target) {
        found = true;
      } else {
        node = node.next;
      }
    }
    return found;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * LinkedList = constant O(1)
 * addToTail = constant O(1)
 * removeHead = constant O(1)
 * contains = linear O(n)
 * Node = constant O(1)
 */
