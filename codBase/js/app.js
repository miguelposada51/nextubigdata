// Namespace for the library
var Calculadora = {};
 
// Library definition
Calculadora = (function () {
  // Private variables / properties
  var num, totResul, estope = 0 , oper = "", tempo = [];  
      // al hacer clck en cualquier tecla
    function obtenerId () {
     var attribute = this.getAttribute("id");
        //adicionar a la pantalla 
     var input =  document.getElementById("display");
      if(this.getAttribute("id") == 'on'){       
        document.getElementById("display").innerHTML = "";      
        attribute = 0;
        tempo = [];   
      }   
      if (input.textContent.length > 7) {        
         document.getElementById("display").maxLength = 8;
      }else{           
       displayOnScreen(document.getElementById(attribute));
       //expandir y contraer al hacer click
       expanTecla(this);         
      }
    }
   
  function expanTecla(tecla){   
    document.getElementById(tecla.id).onmousedown =  tecla.style.width = '76.9px';//'76.9px';
    document.getElementById(tecla.id).onmouseup = tecla.style.height = '62px'; //'62px';
    setTimeout(function(){ tecla.style.width = '77px'  }, 300); //'77px'
    setTimeout(function(){ tecla.style.height = '62.5' }, 300);   //'62.5'
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
      //operaciones basicas (+-*/)
    }else if(num.id == 'mas' || num.id == 'menos' || num.id == 'por' || num.id == 'dividido'){
        switch(num.id){
          case 'mas':
              oper = "+";
              break;
          case 'menos':
              oper = "-";
              break;
          case 'por':
              oper = "*";
              break;
          case 'dividido':
              oper = "/";
              break;    
        }        
        if (estope == 0) {               
         tempo.push(document.getElementById("display").textContent,oper);        
        }else{
           tempo.push(oper);    
        }
        estope = 1; 
    }else if(num.id == 'igual'){             
             document.getElementById("display").innerHTML = eval(tempo.join(""));   
             tempo = []; 
             estope = 0 ;         
    }else{     //si esta el cero en pantalla  
      if(tempo.length > 0){
           tempo.push(num.id);
           document.getElementById("display").innerHTML ="";         
      }
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
   // teclaClick: teclaClick,
    obtenerId: obtenerId    
  }
}());

 window.onload=function(){
    var classname = document.getElementsByClassName("tecla");
    for (var i = 0; i < classname.length; i++) {
      classname[i].addEventListener('click', Calculadora.obtenerId, false);
    }
 }
