/*
Al presionar el boton pedir  numeros  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.
**/

function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var input;
	var respuesta='si';

	while (respuesta == "si"){
		input = parseInt(prompt("Dime un numero para sumar"));
		contador ++;
		if (input>=0){
			positivo = positivo + parseInt(input);
		}
		else{
			negativo = negativo * parseInt(input);
		}
		respuesta = prompt("Queres sumar otro numero?");
	}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN