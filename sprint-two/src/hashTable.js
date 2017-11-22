

var HashTable = function() {
  this._limit = 8;
  this._itemCount = 0;
  this._storage = LimitedArray(this._limit);
  this._brokenIn = false;
};

HashTable.prototype._percentFull = function() {
  return this._itemCount / this._limit;
};

//
HashTable.prototype.empty = function(size) {
  this._limit = size;
  this._itemCount = 0;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.resize = function(relativeSize) {

  let currentStorageSize = this._limit;
  let newStorageSize = currentStorageSize * relativeSize;
  let tempStorage = [];

  this._storage.each(function(currItem, index, storage) {
    tempStorage.push(currItem);
  });
  this.empty(newStorageSize); 
  tempStorage.forEach(function(bucket) {
    if (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i]) {
          let key = bucket[i][0];
          let value = bucket[i][1];
          this.insert(key, value);
        }
      }  
    }
  }, this);
};

HashTable.prototype.insert = function(k, v) {
  //find the index in the hash to inset the item 
  var index = getIndexBelowMaxForKey(k, this._limit);
  //if there isn't a bucket there already
  if (this._storage.get(index) === undefined) {
    //create a bucket with the tupl inside and set that at the hash index
    this._storage.set(index, [[k, v]]);
  } else { //if there is a bucket present at that index
    let bucket = this._storage.get(index);
    let inserted = false;
    // check each tupl in the bucket 
    for (var i = 0; i < bucket.length; i++) {
      //if there's an existing tupl with the given key
      if (bucket[i][0] === k) {
        //replace the existing tupl value with the provided value
        bucket[i][1] = v;
        inserted = true;
      }
    }
    //if there was not a matching tupl key already in the bucket
    if (!inserted) {
      //put the k,v pair in the bucket as a tupl
      bucket.push([k, v]);
      inserted = true;
    }
  }
  this._itemCount++;
  //check to see if the hash has been used to avoid 
  //resizing the initial hash size any smaller before necessary
  if (!this._brokenIn && this._itemCount === 4) {
    this._brokenIn = true;
  }
  count = this._itemCount;
  //if the hash is getting full, double it's size
  if (this._percentFull() >= 0.75) {
    this.resize(2);
  }
};

// HashTable.prototype.retrieve = function(k) {
//   var index = getIndexBelowMaxForKey(k, this._limit);
//   let bucket = this._storage.get(index);
//   if(bucket){
//     for (var i = 0; i < bucket.length; i++) {
//       if (bucket[i][0] === k) {
//         return bucket[i][1];
//       }
//     }
//   }
//   return undefined;
// };

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let bucket = this._storage.get(index);
  //if the key's index exists
  if (bucket) {
    var name;
    //check each tupl in the bucket
    for (var i = 0; i < bucket.length; i++) {
      //if theres a tupl with that key
      if (bucket[i][0] === k) {
        //if name exists, append it to name otherwise set it to name
        //this will make non-overwritten collisions obvious
        name = name ? name += bucket[i][1] : bucket[i][1];
      }
    }
  }
  //if name exists, return it otherwise return undefined
  return name;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket.splice(i, 1);
    }
  }
  this._itemCount--;
  if (this._percentFull() < 0.25 && this._brokenIn) {
    this.resize(0.5);
  }
};

//test to see that old values don't exist in old locations after resizing
//test to see that old valuse don't exist after re-assigning
/*
 * Complexity: What is the time complexity of the above functions?
 */


