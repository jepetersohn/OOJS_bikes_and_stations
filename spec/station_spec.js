describe("a bike station", function() {
  var station, newerBike, olderBike, bikes

  beforeEach(function() {
    newerBike = new Bike("12345", "red", 2016, true, true, true);
    olderBike = new Bike("67890", "blue", 2015, false, false, false);
    someBike = new Bike("54634", "green", 1994, true, true, true)

    station = new Station("Divvy", "Wood & Division", [newerBike, olderBike], 2)
  });

  it("has a name", function() {
    expect(station.name).toEqual("Divvy");
  });

  it("has a location", function() {
    expect(station.location).toEqual("Wood & Division");
  });

  it("has bikes", function() {
    expect(station.bikes).toEqual([newerBike, olderBike]);
  });

  it("has a capactity", function() {
    expect(station.capacity).toEqual(2);
  });

  it("is empty if it has no bikes", function() {
    station.bikes = [];
    expect(station.empty()).toBe(true);
  });

  it("has a newest bike determined by model year", function() {
    expect(station.newestBike()).toEqual(newerBike);
  });

  describe("adding bikes", function() {
    it("takes bikes one at a time", function() {
      station.bikes = [];
      station.take(newerBike);
      expect(station.bikes).toEqual([newerBike]);
    });

    it("only takes capacity # of bikes", function() {
      station.bikes =[newerBike, olderBike];
      expect(function() {station.take();}).toThrowError(Error, "Can't add bikes to a full station!");
    });

    it("takes multiple bikes at the same time", function() {
      bike = { id: "4567", color: "red", modelYear: 2010 }
      station.bikes = [bike]

      station.takeMultiple([newerBike, olderBike]);
      expect(station.bikes).toEqual([bike, newerBike, olderBike]);
    });

    it("throws an error when the station is full", function() {
      station.bikes =[newerBike, olderBike];
      expect(function(){ station.takeMultiple(); }).toThrowError(Error, "Can't add bikes to a full station!");
    });
  });

  describe("releasing bikes", function() {
    it("releases its newest bike", function() {
      expect(station.release()).toEqual(newerBike);
    });

    it("does not keep released bikes", function() {
      expect(station.bikes).toContain(newerBike);
      station.release();
      expect(station.bikes).not.toContain(newerBike);
    });

    describe("when the station is empty", function() {
      it("releases nothing", function() {
        station.bikes = [];
        expect(station.release()).toBeUndefined();
      });
    });
  });

  describe("repairing bikes", function(){
    it("pumps the tires", function(){
      station.tuneUp();
      expect(station.bikes[0].flatTire).toEqual(false);
    });

    it("repairs the chain", function(){
      station.tuneUp();
      expect(station.bikes[0].brokenChain).toEqual(false);
    })

    it("tunes the bell", function(){
      station.tuneUp();
      expect(station.bikes[0].dullBell).toEqual(false);
    })

  });
});
