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
        var input =  document.getElementById("display");

      if(this.getAttribute("id") == 'on'){       
        document.getElementById("display").innerHTML = "";      
        attribute = 0;   
      }       
        
          if (input.textContent.length > 7) {
            
             document.getElementById("display").maxLength = 8;
          }else{           
        displayOnScreen(document.getElementById(attribute));
        //expandir y contraer al hacer click
        expanTecla(this);         
          }
    };

    for (var i = 0; i < classname.length; i++) {
        classname[i].addEventListener('click', obtenerId, false);
    }
   }
   
  function expanTecla(tecla){   
    document.getElementById(tecla.id).onmousedown =  tecla.style.width ='76.9px';
    document.getElementById(tecla.id).onmouseup = tecla.style.height ='62px';
    setTimeout(function(){ tecla.style.width ='77px' }, 300);
    setTimeout(function(){ tecla.style.height ='62.5' }, 300);   
  }
  function teclaClick(){
    console.log("exitoso");
  }
 
  // Private methods
  function displayOnScreen(num) {
    // validar si es  tecla (.) punto
    if (num.id == 'punto'){
      var punto = ".";      
      var cadena = document.getElementById("display").textContent;   
      var posicion = cadena.indexOf('.');     
     if(posicion < 0 ){
      document.getElementById("display").textContent = cadena + punto;    
     } //si es tecla ON/C 
    }else if(num.id == 'sign'){
      if(document.getElementById("display").textContent != 0 ){
        if(document.getElementById("display").textContent < 0){
          document.getElementById("display").innerHTML = document.getElementById("display").textContent.substring(1);          
        }else{
          document.getElementById("display").innerHTML = "-"  + document.getElementById("display").textContent;
        }
      }
      //si esta el cero en pantalla
    }else{       
        if(document.getElementById("display").textContent == 0 ){
          
          if(document.getElementById("display").textContent != '0.'){
            document.getElementById("display").innerHTML =""; 
            document.getElementById("display").innerHTML = num.id;
          }else{          
            document.getElementById("display").innerHTML = document.getElementById("display").textContent + num.id;            
          }
         // si es diferente a cero y el cero es el inicial- lo elimina      
        }else if(document.getElementById("display").textContent == 0 && num.id != 0){
          document.getElementById("display").innerHTML ="";
          document.getElementById("display").innerHTML = document.getElementById("display").textContent + num.id;
        }else{        
          document.getElementById("display").innerHTML = document.getElementById("display").textContent + num.id; 
        }
      }
    
  }
 
  // Public API
  return {
    teclaClick: teclaClick,
 
    anotherPublicMethod () {
      console.log("tobarei");
    }
  }
}());

Calculadora.teclaClick();