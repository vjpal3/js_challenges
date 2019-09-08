function printFruits(fruits){
  for (var i = 0; i &lt; fruits.length; i++) {
    (function(){
      var current = i;                    // define new variable that will hold the current value of "i"
      setTimeout( function(){
        console.log( fruits[current] );   // this time the value of "current" will be different for each iteration
      }, current * 1000 );
    })();
  }
}

printFruits(["Lemon", "Orange", "Mango", "Banana"]);