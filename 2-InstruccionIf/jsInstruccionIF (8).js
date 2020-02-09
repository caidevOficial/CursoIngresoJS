/*
Al ingresar una edad menor a 18 años y 
un estado civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor, 
mostrar el siguiente mensaje: 'Es soltero y no es menor.' 
**/
function mostrar()
{
//tomo la edad  
	var inputEdad;
	var inputEstado;

	inputEdad = document.getElementById('edad').value;
	inputEstado = document.getElementById('estadoCivil').value;

	if ((inputEdad >18)&&(inputEstado=="Soltero")){
		alert("Es soltero y no es menor.")
	}
}//FIN DE LA FUNCIÓN