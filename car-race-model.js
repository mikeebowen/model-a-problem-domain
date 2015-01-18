var champion;
var drivers = {};
var bank = 500;
var userDriver;
var msg = document.getElementById('msg');
document.getElementById('bob').addEventListener('click', function() {userDriver = drivers.Bob}, false);
document.getElementById('tom').addEventListener('click', function() {userDriver = drivers.Tom}, false);
document.getElementById('elmo').addEventListener('click', function() {userDriver = drivers.Elmo}, false);
document.getElementById('play').addEventListener('click', play, false);
document.getElementById('bank').innerHTML = 'Your funds: ' +bank;

function bet(num) {
  if (userDriver === champion) {
    bank += num;
    msg.innerHTML = ('You won!');
  } else {
    bank -= num;
    msg.innerHTML = ('You lose.');
    if (bank <= 0) {
      msg.innerHTML = ("Sorry, you are out of money!")
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
  document.getElementById('winner').innerHTML = ' The winner is ' + champion.name + '!';
  return champion;
};

function play() {
  if (document.getElementById('bet').value > bank) {
    console.log('Slow down, you aren\'t that rich.');
  } else {  
    Race(drivers, monaco);
    bet(Number(document.getElementById('bet').value));
    document.getElementById('bank').innerHTML = 'Your funds: ' +bank;
    for(var name in drivers) {
    drivers[name].driverSkill = Math.random() + .01;
    } 
  }   
}
