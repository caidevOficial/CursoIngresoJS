/*
Realizar el algoritmo que permita el ingreso por prompt de las notas 
(validar entre 0 y 10) , el sexo(validar el sexo “f” o “m”) de 5 alumnos, 
informar por alert:
	a)	El promedio de las notas totales.
	b)	La nota más baja y el sexo de esa persona.
	c)	La cantidad de varones que su nota haya sido mayor o igual a 6.
			
			*/

function mostrar()
{
	var nota; //nota actual
	var notaBaja; //nota mas baja
	var notasTotales; //suma de notas

	var sexo; //sexo de persona ingresada
	var sexoNotaBaja; //sexo de la persona con la nota mas baja

	var cantVarones; //varones con notas 6 o superior
	var promedio; //promedio de notas
	var contador; //contador iterador
	contador=0;
	cantVarones=0;

	while (contador<6){
	//·····································································
	
	//validar nota

	do{
		nota=prompt("ingrese la nota: ");
		nota=parseInt(nota);
	}while (isNaN(nota));

	//·····································································
	
	//validar sexo

	do{
		sexo=prompt("ingrese el sexo ( m / f ): ");
	}while (!isNaN(sexo));

	//·····································································
	
	if ((nota>5) && (sexo=="m")){
		cantVarones++;
	}
	//validar cantidad varones con notas 6+

	do{
		cantVarones=parseInt(cantVarones);
	}while (isNaN(cantVarones));

	//·····································································
	
	//informar el sexo que tuvo nota mas baja.

		if ((contador==0)|| (notaBaja>nota)){
			notaBaja=nota;
			sexoNotaBaja=sexo;
		}
	
	//·····································································
	contador++;
	}
	promedio=notasTotales/contador;
	
	alert("El promedio de notas es : "+promedio);
	alert("la nota mas baja fue: "+notaBaja + " y el sexo de esa persona es "+sexoNotaBaja);
	alert("varones con notas mayores o iguales a 6: "+cantVarones);
}
