/*
Al ingresar una edad menor a 18 años y 
un estado civil distinto a "Soltero", 
mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.' 
**/
function mostrar()
{
//tomo la edad  
var inputEdad;
var inputEstado;

inputEdad = document.getElementById('edad').value;
inputEstado = document.getElementById('estadoCivil').value;

	if ((inputEdad <18) && (inputEstado != "Soltero")){
		alert("Es muy pequeño para NO ser soltero.");
	}
}//FIN DE LA FUNCIÓN