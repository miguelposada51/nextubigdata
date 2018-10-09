// Namespace for the library
var Calculadora = {};
 
// Library definition
Calculadora = (function () {
  // Private variables / properties
  var num, sum, concat;
  

   //uno.addEventListener("click", publicMethod);
   window.onload=function(){

       document.getElementById("0").addEventListener("click", function() {
       displayOnScreen(document.getElementById("0"));
       
       });
       document.getElementById("1").addEventListener("click", function() {
       displayOnScreen(document.getElementById("1"));
       });


   }
   
  var dos = document.getElementById("2");
  var tres = document.getElementById("3");
  var cuatro = document.getElementById("4");
  var cinco = document.getElementById("5");
  var seis = document.getElementById("6");

 
  // Private methods
  function displayOnScreen(num) {
    
    //si esta el cero en pantalla
    if(document.getElementById("display").textContent == 0){
     document.getElementById("display").innerHTML =""; 
     document.getElementById("display").innerHTML = num.id;  
     // si es diferente a cero y el cero es el inicial- lo elimina      
    }else if(document.getElementById("display").textContent == 0 && num.id != 0){
      document.getElementById("display").innerHTML ="";
      document.getElementById("display").innerHTML = document.getElementById("display").textContent + num.id;
    }else{
      document.getElementById("display").innerHTML = document.getElementById("display").textContent + num.id; 
    }
    
  }
 
  // Public API
  return {
    publicMethod: function () {
      alert("si");
    },
 
    anotherPublicMethod () {
    }
  }
}());