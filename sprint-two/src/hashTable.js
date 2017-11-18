

var HashTable = function() {
  this._limit = 8;
  this._bucketSize = 4;
  this._tuplSize = 2;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if(this._storage.get(index) === undefined){
    let tupl = LimitedArray(this._tuplSize);
    tupl.set(0, k);
    tupl.set(1, v);
    console.log(tupl.get(0));
    let bucket = LimitedArray(this._bucketSize);
    bucket.set(0, tupl);
    this._storage.set(index, bucket);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let bucket = this._storage.get(index);
  for(var i = 0; i < this._bucketSize; i++){
    if(bucket.get(i).get(0) === k){
      return bucket.get(i).get(1);
    }
  }
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


