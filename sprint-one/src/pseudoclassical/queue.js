var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.last  = 0;
  this.first = 0;
  this.count = 0;
};

Queue.prototype.enqueue = function (value) {
  this.storage[this.last] = value;
  this.last += 1;
  this.count += 1;
};

Queue.prototype.dequeue = function () {
  var dequeued = this.storage[this.first];
  delete this.storage[this.first];
  this.count = this.count ? this.count - 1 : 0;
  this.first += 1;
  return dequeued;
};

Queue.prototype.size = function () {
  return this.count;
};