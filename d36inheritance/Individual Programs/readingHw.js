"use strict";
/*eslint-disable*/

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

Rabbit.prototype = {};


//Rabbit.prototype.eats = false;


console.log( rabbit.eats ); // ?

