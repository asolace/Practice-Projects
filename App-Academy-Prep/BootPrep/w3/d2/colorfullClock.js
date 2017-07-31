
var chalk = require('chalk');
var clock = {
  pad : function(num){
    return num < 10 ? "0" + num : String(num);
  },

// Calculating S -> M -> H
  totalMilliSeconds: 0,
  getMilliSeconds: function(){
    var milliSec = (this.totalMilliSeconds) % 1000;
    return this.pad(milliSec);
  },
  getSeconds: function(){
    var seconds = Math.floor(this.totalMilliSeconds / 1000) % 60;
    return this.pad(seconds);
  },
  getMinutes: function(){
    var minutes = Math.floor(this.totalMilliSeconds / 1000 / 60) % 60;
    return this.pad(minutes);
  },
  getHours: function(){
    var hours = Math.floor(this.totalMilliSeconds / 1000 / 60 / 60) % 12;
    return this.pad(hours);
  },
  getDays: function(){
    var days = Math.floor(this.totalMilliSeconds /1000 / 60 / 60 / 24);
    return this.pad(days);
  },

// Log
  printTime: function(){
    var time = [this.getDays(), this.getHours(), this.getMinutes(), this.getSeconds(), this.getMilliSeconds()];
    console.log(chalk.red(time[0]) + ":" + chalk.yellow(time[1]) + ":" + chalk.green(time[2]) + ":" + chalk.cyan(time[3]) + ":" + (time[4]));

  },
// Ticker
  intervalTick: function(startSeconds){
    this.totalMilliSeconds = startSeconds || this.totalMilliSeconds;
    setInterval(function(){
      this.totalMilliSeconds += 1;
      this.printTime();
    }.bind(this), 1)
  },
  timeoutTick: function(startSeconds){
    this.totalMilliSeconds = startSeconds || this.totalMilliSeconds;
    this.totalMilliSeconds += 1;
    this.printTime();
    setTimeout(this.timeoutTick.bind(this), 1000);
  }
};

clock.intervalTick();
