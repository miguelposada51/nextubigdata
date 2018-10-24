// Namespace for the library
var Calculadora = {};
 
// Library definition
Calculadora = (function () {
  // Private variables / properties
  var num, estope = 0 , oper = "", tempo = [];  
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
    document.getElementById(tecla.id).onmousedown =  tecla.style.width = '76.9px';
    document.getElementById(tecla.id).onmouseup = tecla.style.height ='62px';
    setTimeout(function(){ tecla.style.width ='77px' }, 300);
    setTimeout(function(){ tecla.style.height ='62.5' }, 300);   
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
        console.log("estope"+estope);
        if (estope == 0) {
         console.log(tempo +"---"+document.getElementById("display").textContent.length);        
         tempo.push(document.getElementById("display").textContent,oper);
         console.log(tempo);  
        }else{
           tempo.push(oper);    
        }
        estope = 1; 
    }else if(num.id == 'igual'){
        console.log("resultado"+tempo);
    }else{     //si esta el cero en pantalla  
      if(tempo.length > 0){
           tempo.push(num.id);
           document.getElementById("display").innerHTML =""; 
           console.log("en este: "+tempo); 
           for (var i = 0; i <= tempo.length; i++) {
             Things[i]
           }
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
    obtenerId: obtenerId,
    anotherPublicMethod () {
      console.log("tobarei");
    }
  }
}());

 window.onload=function(){
    var classname = document.getElementsByClassName("tecla");
    for (var i = 0; i < classname.length; i++) {
      classname[i].addEventListener('click', Calculadora.obtenerId, false);
    }
 }
