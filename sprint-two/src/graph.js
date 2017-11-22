

// Instantiate a new graph
var Graph = function() {
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this[node] = {
    value: node,
    edges: {}
  }; 
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.hasOwnProperty(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  let nodes = this[node].edges;
  for (var key in nodes) {
    this.removeEdge(key, node);
  }
  delete this[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  let thisNode = this[fromNode];
  let thatNode = this[toNode];    
  let over = thisNode ? thisNode.edges.hasOwnProperty(toNode) : false;
  let back = thatNode ? thatNode.edges.hasOwnProperty(fromNode) : false;
  return (over && back) ? true : false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (fromNode && toNode) {
    this[fromNode].edges[toNode] = toNode;
    this[toNode].edges[fromNode] = fromNode;
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this[fromNode].edges[toNode];  
  delete this[toNode].edges[fromNode];  
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  let nodes = Object.getOwnPropertyNames(this);
  for (var i = 0; i < nodes.length; i++) {
    cb(nodes[i]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


