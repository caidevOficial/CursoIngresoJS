/*
Al presionar el boton pedir  numeros  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.
**/

function mostrar()
{

	// declarar variables
	var contador=0;
	var minimo=0;
	var maximo = 0;
	var respuesta='si';

	//mientras la respuesta sea SI, comparara los numeros ingresados, el menor lo guardara en minimo y
	//el mayor en maximo. Al dejar de ingresar numeros, denotara el minimo y maximo de los ingresados.
	
	while(respuesta=='si')
	{
		contador ++;
		var input = parseInt(prompt("ingresa un numero: "));
		
		if (contador==1){
			maximo = input;
			minimo = input;
		
		}
		else{
			if ((contador>1)&&(input>maximo)){
			maximo = input;
			
			}
			else{
				if ((contador>1)&&(input<minimo)){
				minimo = input;
				}
			} 
		}
		
		respuesta = prompt("queres agregar otro numero? (responde con SI para continuar y NO para terminar")
	}

document.getElementById('minimo').value=minimo;
document.getElementById('maximo').value=maximo;

}//FIN DE LA FUNCIÓN