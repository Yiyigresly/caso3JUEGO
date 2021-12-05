var optionjuga=prompt ("Escoge piedra, papel o tijeras ");
var optionmaquina= Math.round(Math.random()*(2))
var opciones=["piedra","papel","tijeras"];
// declaramaos variables para poder comparar
var piedra="piedra";
var papel="papel";
var tijeras="tijeras";

alert("jugador elegió :"+optionjuga);
alert ("Maquína eligió: "+opciones[optionmaquina]);
 let maquina=opciones[optionmaquina];

if (optionjuga.toUpperCase()==maquina.toUpperCase()) {
    alert ("Empate");
  //  
} else if(optionjuga==piedra){
    if (maquina==papel){alert ("perdistes");}
    if (maquina==tijeras){alert ("Ganastes");}
     
 } else if(optionjuga==papel){
    if (maquina==piedra){alert ("Ganastes");}
    if (maquina==tijeras){alert ("Perdistes");}
 }
 else if(optionjuga==tijeras){
    if (maquina==piedra){alert ("Perdistes");}
    if (maquina==papel){alert ("Ganastes");}
 }