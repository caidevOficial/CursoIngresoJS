/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var salario;
	var aumento10Porciento;
	var salarioConAumento;
	var resultado;

	salario = document.getElementById('sueldo').value;
	salario = parseInt(salario);

	aumento10Porciento = 1.1;
	salarioConAumento = (salario * aumento10Porciento);
	resultado = salarioConAumento;

	document.getElementById('resultado').value = resultado;
	}
