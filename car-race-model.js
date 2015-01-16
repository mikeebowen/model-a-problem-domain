<script>

var drivers = {};

 var cars = [ferrari = new Car('Ferrari', 150),
             gremlin = new Car('Gremlin', 180),
             aston = new Car('Aston Martin', 140)];

function Driver(name){
  this.name        = name;
  this.driverSkill = Math.random() + .01;
  this.car        = cars[Math.floor(Math.random()*3)];
}

var names = ["tom", "bob", "elmo"];
for (name in names) {
drivers[names[name]] = (new Driver(names[name]));
}

function Car(model, speed) {
  this.model = model;
  this.speed = speed;
}

function Track(trackName,trackDistance){
  this.trackName       = trackName;
  this.distance        = trackDistance;
}

var tracks = [monaco = new Track('Monaco', 1000),
              laguna = new Track('Laguna Seca', 800),
              nuremberg = new Track('Neremburg', 1500)];



function Race(laps, cars, drivers, track){
  for (driver in drivers){
    var i = Math.floor(Math.random()*3)
    drivers.driver.car = car[i];
  }
  this.winner = function(){
    //adds win to instance of driver constructor object
  }
  this.loser = function(){
    //adds loss to instance of driver constructor object
  }
}

Track.prototype.lapTime = function(){
  //some kind of function
}

/* driverSkill combined with trackDifficulty affects car speed. Car speed, trackDistance, and luck output winner and losers. */
</script>






// add to race object: car and track instance to race





