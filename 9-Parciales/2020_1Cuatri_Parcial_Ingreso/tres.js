/*
	En el ingreso a un viaje en crucero nos solicitan:<br>
        1 - NOMBRE<br>
        2 - EDAD (mayores a 18 años)<br>
        3 - Sexo ("m" o "f")<br>
        4 - Estado Civil ("soltero", "casado", "viudo").<br><br>
        A) Dar el nombre del hombre casado mas joven.<br>
        B) El sexo y nombre del pasajero/a mas viejo.<br>
        C) La cantidad de mujeres que hay casadas o viudas.<br>
        D) El promedio de edad entre las mujeres.<br>
        E) El promedio de edad entre los hombres solteros.
*/
function mostrar()
{
	var nombre;
	var edad;
	var sexo;
	var estadoCivil;

	var denominacionSexo;
	var hombreCasadoMasJoven;
	var edadHombreCasadoMasJoven;
	var cantidadHombreSoltero;
	var sumaEdadHombreSoltero;
	
	var sexoPasajeroMasViejo;
	var nombrePasajeroMasViejo;
	var edadPasajeroMasViejo;

	var cantidadMujeres;
	//var cantidadMujeresViudas;
	//var cantidadMujeresCasadas;
	var cantidadMujeresCasadas_o_Viudas;
	var sumaEdadMujeres;
	var promedioEdadMujeres;
	var promedioEdadHombresSolteros;

	var contador;
	var contadorHombre;
	var contadorHombreCasado;
	var respuesta;

	respuesta="s";
	contador=0;
	contadorHombre=0;
	edadHombreCasadoMasJoven=0;
	cantidadMujeresCasadas_o_Viudas=0;
	//cantidadMujeresViudas=0;
	//cantidadMujeresCasadas=0;
	contadorHombreCasado=0;
	edad=0;
	sumaEdadMujeres = parseInt(sumaEdadMujeres);
	sumaEdadMujeres=0;
	cantidadMujeres=0;
	cantidadHombreSoltero=parseInt(cantidadHombreSoltero);
	cantidadHombreSoltero=0;
	sumaEdadHombreSoltero=parseInt(sumaEdadHombreSoltero);
	sumaEdadHombreSoltero=0;
	hombreCasadoMasJoven="No hay";

	while(respuesta=="s"){

		contador++;
		
		do{
			nombre = prompt("Por favor, ingrese el nombre del pasajero: ");
		}while((!isNaN(nombre)));

		do{
			edad = prompt("por favor, ingrese la edad: ");
			edad = parseInt(edad);
		}while((isNaN(edad)) || (edad<19));

		do{
			estadoCivil = prompt("por favor, ingrese el estado civil: ");
		}while((!isNaN(estadoCivil)) || ((estadoCivil!="casado") && (estadoCivil!="soltero") && (estadoCivil!="viudo")));

		do{
			sexo = prompt("indique su sexo ( f para femenino o m para masculino) ");
		}while((!isNaN(sexo)) || ((sexo!="m") && (sexo!="f")));
		//######### Fin validacion ######### 

		/*
		SI ES HOMBRE: aumenta contador hombre +1 y asigna masculino al sexo.
		SI ES MUJER: sube contador de mujeres +1, suma sus edades entre si y si ademas es casada, aumenta contador de casadas +1
		en caso de ser viuda aumenta contador de viudas +1*/
		switch (sexo){
			case "m":
				denominacionSexo = "Masculino";
				contadorHombre++;
				if ((estadoCivil=="casado")){
					contadorHombreCasado++;
					if ((contadorHombreCasado==1) || (edadHombreCasadoMasJoven>edad)){
						edadHombreCasadoMasJoven = edad;
						hombreCasadoMasJoven = nombre;
					}	
				}
				if (estadoCivil=="soltero"){
						sumaEdadHombreSoltero = sumaEdadHombreSoltero + edad;
						cantidadHombreSoltero++;
				}
				break;
			case "f":
			denominacionSexo = "Femenino";
				cantidadMujeres++;
				sumaEdadMujeres = sumaEdadMujeres + edad;
				if((estadoCivil=="casado")||(estadoCivil=="viudo")){
					//cantidadMujeresCasadas++;
					cantidadMujeresCasadas_o_Viudas++;
				}
				break;
			default:
				break;
		}
		//######### toma edad y nombre si es HOMBRE CASADO
		/*
		if ((estadoCivil=="casado") && (sexo=="m")){
			contadorHombreCasado++;
			if ((contadorHombreCasado==1) || (edadHombreCasadoMasJoven>edad)){
				edadHombreCasadoMasJoven = edad;
				hombreCasadoMasJoven = nombre;
			}
		}
		*/

		//######### toma edad, nombre y sexo SI ES MAS VIEJO
		if ((contador==1) || (edadPasajeroMasViejo<edad)){
			edadPasajeroMasViejo = edad;
			sexoPasajeroMasViejo = denominacionSexo;
			nombrePasajeroMasViejo = nombre;
		}

		//######### suma cantidad de SOLTEROS y SUS EDADES si el pasajero es HOMBRE SOLTERO
		/*
		if ((sexo=="m") && (estadoCivil=="soltero")){
			sumaEdadHombreSoltero = sumaEdadHombreSoltero + edad;
			cantidadHombreSoltero++;
		}
		*/

		respuesta = prompt("Desea agregar otro pasajero?: (s para continuar)");
	}

//######### Promedios ######### 
promedioEdadMujeres = sumaEdadMujeres/cantidadMujeres;
promedioEdadHombresSolteros = sumaEdadHombreSoltero/cantidadHombreSoltero;

//························································
// RESPUESTAS

document.write("<center>El hombre casado mas joven se llama  "+ hombreCasadoMasJoven + "</center><br>");
document.write("<center>El pasajero mas viejo se llama "+ nombrePasajeroMasViejo + " y es " + sexoPasajeroMasViejo + "</center><br>");
document.write("<center>Mujeres casadas: "+ cantidadMujeresCasadas + " y mujeres viudas: " + cantidadMujeresViudas + "</center><br>");
document.write("<center>El promedio de edad entre las mujeres es "+ promedioEdadMujeres + " Años</center><br>");
document.write("<center>El promedio de edad entre los hombres solteros es "+ promedioEdadHombresSolteros + " Años</center><br>");
}
