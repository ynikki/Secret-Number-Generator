
'use strict';
module.exports = function() {

  var secretNum = Math.floor(Math.random()*100001);
  return function(){
  	return secretNum;
  };
  

};