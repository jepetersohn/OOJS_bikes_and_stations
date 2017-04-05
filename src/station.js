var Station = function(name, location, bikes = [], capacity) {
  this.name = name,
  this.location = location
  this.bikes = bikes
  this.capacity = capacity
}

Station.prototype.empty = function(){
  if (this.bikes.length === 0){
    return true
  }
}

Station.prototype.newestBike = function(){
  var yearArray = [];
  this.bikes.forEach(function(bike){
    yearArray.push(bike);
  });
  var sortedArray = yearArray.sort(function(a,b){
    return a - b
  });
  return sortedArray[0];
}

Station.prototype.take = function(oneBike){
  if (this.bikes.length < this.capacity){
  this.bikes.push(oneBike);} else {
    throw new Error("Can't add bikes to a full station!");}
}

Station.prototype.takeMultiple = function(newBikeArray){
  if (this.bikes.length < this.capacity){
  this.bikes = this.bikes.concat(newBikeArray);} else {
    throw new Error("Can't add bikes to a full station!");}
}

Station.prototype.release = function(){
  return this.bikes.shift();
}

Station.prototype.tuneUp = function(){
    this.bikes.forEach(function(bike){
        bike.pumpTire();
        bike.repairChain();
        bike.tuneBell();
    });
}
