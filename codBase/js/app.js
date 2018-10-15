// Namespace for the library
var Calculadora = {};
 
// Library definition
Calculadora = (function () {
  // Private variables / properties
  var num, sum, concat;
  

   //uno.addEventListener("click", publicMethod);
   window.onload=function(){
      var classname = document.getElementsByClassName("tecla");
      // al hacer clck en cualquier tecla
    var obtenerId = function() {
        var attribute = this.getAttribute("id");
        //adicionar a la pantalla        
        displayOnScreen(document.getElementById(attribute));
        //expandir y contraer al hacer click
        expanTecla(this);         
    };

    for (var i = 0; i < classname.length; i++) {
        classname[i].addEventListener('click', obtenerId, false);
    }
   }
   
  function expanTecla(tecla){   
    document.getElementById(tecla.id).onmousedown =  tecla.style.width ='22.2%';
    document.getElementById(tecla.id).onmouseup = tecla.style.height ='17.3%';
    setTimeout(function(){ tecla.style.width ='22%' }, 300);
    setTimeout(function(){ tecla.style.height ='17%' }, 300);   
  }

 
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