
var drivers = {};

function Car(model, speed) {
  this.model = model;
  this.speed = speed;
}

var cars = [ferrari = new Car('Ferrari', 150),
           gremlin = new Car('Gremlin', 180),
           aston = new Car('Aston Martin', 140)];

function Driver(name){
  this.name        = name;
  this.driverSkill = Math.random() + .01;
  this.car         = cars[Math.floor(Math.random()*3)];
  this.time        =0;
}

var names = ["tom", "bob", "elmo"];
for (name in names) {
drivers[names[name]] = (new Driver(names[name]));
}


function Track(trackName,trackDistance){
  this.trackName       = trackName;
  this.distance        = trackDistance;
}

var monaco    = new Track('Monaco', 1000);
var laguna    = new Track('Laguna Seca', 800);
var nuremberg = new Track('Neremburg', 1500);



function Race(drivers, track){
  for(var name in drivers) {
  drivers[name].time = track.distance / ((drivers[name].driverSkill) * (drivers[name].car.speed));
  }
  this.winner = function(){
  }
}

/* driverSkill combined with trackDifficulty affects car speed. Car speed, trackDistance, and luck output winner and losers. */







// add to race object: car and track instance to race





