<script>

  function Driver(name, driverSkill){
    this.driverSkill = driverSkill;
    this.name        = name;
    this.wins        = 0;
    this.lossses     = 0;
  }

  function Car(model, speed) {
    this.model = model;
    this.speed = speed;
  }

  function Track(trackName,trackDistance,trackDifficulty){
    this.trackName       = trackName;
    this.distance        = trackDistance;
    this.trackDifficulty = trackDifficulty;
  }

  function Race(laps){
    this.laps = laps;
    this.luck = function(){
      //something to add randomness to laps
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
