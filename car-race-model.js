var champion;
var drivers = {};
var bank = 500;
var userDriver;
document.getElementById('bob').addEventListener('click', function() {userDriver = drivers.Bob}, false);
document.getElementById('tom').addEventListener('click', function() {userDriver = drivers.Tom}, false);
document.getElementById('elmo').addEventListener('click', function() {userDriver = drivers.Elmo}, false);
document.getElementById('play').addEventListener('click', play, false);

function bet(num) {
  if (num > bank) {
    console.log('Slow down, you aren\'t that rich.')
  } else {
    if (userDriver === champion) {
      bank += num;
      console.log('You won!');
    } else {
      bank -= num;
      console.log('You lose.');
      if (bank <= 0) {
        console.log("Sorry, you are out of money!")
      }
    }
  }
}

function Car(model, speed) {
  this.model = model;
  this.speed = speed;
}

var cars = [ferrari = new Car('Ferrari', 150),
            gremlin = new Car('Gremlin', 180),
            aston   = new Car('Aston Martin', 140)];

function Driver(name){
  this.name        = name;
  this.driverSkill = Math.random() + .01;
  this.car         = cars[Math.floor(Math.random()*3)];
  this.time        =0;
}

var names = ["Tom", "Bob", "Elmo"];
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
  var lowestTime = 1000;
  for(var name in drivers) {
    drivers[name].time = track.distance / ((drivers[name].driverSkill) * (drivers[name].car.speed));
    if (drivers[name].time < lowestTime) {
      lowestTime = drivers[name].time;
      champion = drivers[name];
    }
  }
  console.log(' The winner is ' + champion.name + '!');
  return champion;
};

function play() {
  Race(drivers, monaco);
  bet(Number(document.getElementById('bet').value));
}
