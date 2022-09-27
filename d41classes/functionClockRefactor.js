"use strict";
/*eslint-disable*/

function stop() {
    clearInterval(this.timer);
};



function start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
    setTimeout(() => {
      clearInterval(this.timer);
      console.log('stop');
    }, 4000);

  }

function Clock({ template }) {

    let timer;

    function render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        let output = template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        console.log(output);
    }


}

Clock.prototype.stop = stop;
Clock.prototype.start = start;


//console.log(Clock)
let clock = new Clock({ template: 'h:m:s' });
clock.start();

/*
  setTimeout(() => {
    clearInterval(timerId);
    console.log('stop');
}, 5000);
*/