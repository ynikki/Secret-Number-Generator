
'use strict';
module.exports = function() {
	//Creates a function that returns the same random number when invoked.
	//Creates a random number
	//Save private local number to 'secretNum'
  var secretNum = Math.floor(Math.random()*100001);

  //Gets the saved random number from the closure.
  return function(){
  	//Nested local scope
  	return secretNum;
  };
  

};