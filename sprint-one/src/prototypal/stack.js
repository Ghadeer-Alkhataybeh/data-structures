var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
var newStack = Object.create(stackMethods);
newStack.storage = {};
newStack.size1 = 0 ;
return newStack ;
};


var stackMethods = {};

stackMethods.push = function(val){
    this.storage[this.size1] = val;
    this.size1 ++ ;
};

stackMethods.pop = function (){
  if (this.size1 == 0){
    return false ;
  }
  this.size1 --;
  var x = this.storage[this.size1];
  delete this.storage[this.size1];
  return x;
};

stackMethods.size = function (){
  return this.size1 ;
};