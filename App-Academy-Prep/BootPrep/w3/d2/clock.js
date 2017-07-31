var clock = {
  pad : function(num){
    return num < 10 ? "0" + num : String(num);
  },

// Calculating S -> M -> H
  totalSeconds: 0,
  getSeconds: function(){
    var seconds = this.totalSeconds % 60;
    return this.pad(seconds);
  },
  getMinutes: function(){
    var minutes = Math.floor(this.totalSeconds / 60) % 60;
    return this.pad(minutes);
  },
  getHours: function(){
    var hours = Math.floor(this.totalSeconds / 60 / 60) % 12;
    return this.pad(hours);
  },
// Log
  printTime: function(){
    //uncommenting below line will cause a slight delay
    //process.stdout.write('\033c') // Same as console.log('\033c')
    console.log([this.getHours(), this.getMinutes(), this.getSeconds()].join(":"));
  },
// Ticker
  intervalTick: function(startSeconds){
    this.totalSeconds = startSeconds || this.totalSeconds;
    setInterval(() => {
      this.totalSeconds += 1;
      this.printTime();
    }, 1000)
  },
  timeoutTick: function(startSeconds){
    this.totalSeconds = startSeconds || this.totalSeconds;
    this.totalSeconds += 1;
    this.printTime();
    setTimeout(this.timeoutTick.bind(this), 1000);
  }
};

clock.intervalTick();
