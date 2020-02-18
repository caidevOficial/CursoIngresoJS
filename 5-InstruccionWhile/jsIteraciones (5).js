/*Al presionar el boton pedir un sexo
'f' para femenino, 'm' para masculino.
**/
var sexo="";
var validarSexo="";

function mostrar()
{

	sexo = prompt("ingrese f ó m .");
	// si el input fue distinto de "f" o "m", seguira pidiendo el ingreso.
	while ((sexo != "f") && (sexo != "m")){
		sexo = prompt("ingrese f ó m .");
	}
	// Devuelve "Femenino" si el input fue "f", 
	//sino devuelve "Masculino" si el input fue "m". 
	switch (sexo){
		case "f":
			validarSexo="Femenino"
			document.getElementById('Sexo').value=validarSexo;
			break;
		case "m":
			validarSexo="Masculino"
			document.getElementById('Sexo').value=validarSexo;
			break;
		default:
	}
}//FIN DE LA FUNCIÓN