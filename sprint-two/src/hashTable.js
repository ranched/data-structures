

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) { 
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, [[k,v]]);
  } else {
    let bucket = this._storage.get(index);
    let inserted = false;
    while(!inserted){
      for (var i = 0; i < bucket.length; i++){
        if (bucket[i][0] === k) {
        bucket[i][1] = v;
        inserted = true;
        }
      };
      bucket.push([k, v]);
      inserted = true;
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++){
    if (bucket[i][0] === k) {
       return bucket[i][1];
    }
  }
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket.splice(i, 1);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


