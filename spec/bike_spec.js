describe("a bike", function() {
  var bike;

  beforeEach(function() {
    bike = new Bike(12847390, "red", 2016, true, true, false)
  });

  it("has an id number", function() {
    expect(bike.id).toEqual(12847390);
  });

  it("has a color", function() {
    expect(bike.color).toEqual("red");
  });

  it("has a model year", function() {
    expect(bike.modelYear).toEqual(2016);
  });

  it("has a record of whether or not its tire is flat", function() {
    expect(bike.flatTire).toEqual(true);
  });

  it("has a record of whether or not its chain is broken", function() {
    expect(bike.brokenChain).toEqual(true);
  });

  it("has a record of whether or not its bell is dull", function() {
    expect(bike.dullBell).toEqual(false);
  });

  it("can pump a flat tire", function(){
    bike.pumpTire();
    expect(bike.flatTire).toEqual(false);
  });

  it("can share a status report", function() {
    expect(bike.statusReport()).toEqual(true);
  });

});
