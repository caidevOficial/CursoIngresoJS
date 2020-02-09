/*
Al presionar el Boton, 
asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBADO;" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4
**/
function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var notaRandom;
	
	notaRandom = parseInt(Math.random() * (11- 1) + 1);

	if((notaRandom>=9) && (notaRandom<=10)){
		alert("Tenes un " + notaRandom + "! EXCELENTE!");	
	}
	if((notaRandom>=4) && (notaRandom<9)){
		alert("Tenes un " + notaRandom + "! APROBADO!");	
	}
	if(notaRandom<4){
		alert("Tenes un " + notaRandom + "! Vamos, la proxima se puede!");	
	}
}//FIN DE LA FUNCIÓN