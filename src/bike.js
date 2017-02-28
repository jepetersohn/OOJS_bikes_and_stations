var Bike = function(id, color, modelYear, flatTire, brokenChain, dullBell) {
  this.id = id,
  this.color = color,
  this.modelYear = modelYear,
  this.flatTire = flatTire,
  this.brokenChain = brokenChain,
  this.dullBell = dullBell
}

Bike.prototype.pumpTire = function(){
  this.flatTire = false;
}

Bike.prototype.repairChain = function(){
  this.brokenChain = false;
}

Bike.prototype.tuneBell = function(){
  this.dullBell = false;
}

Bike.prototype.statusReport = function(){
  return (this.flatTire || this.brokenChain || this.dullBell)
}

