/*
Realizar el algoritmo que permita ingresar la marca del producto, el peso el cual debe ser entre 1 y 100 (validar), 
        la temperatura de almacenamiento(entre -30 y 30)  hasta que el
				usuario quiera e informar al terminar el ingreso por document.write:
				a)
				La cantidad de temperaturas pares. +
				b)
				La marca del producto más pesado
				c)
				La cantidad de productos que se conservan a menos de 0 grados. +
				d)
				El promedio del peso de todos los productos.	+			
				f)
				El peso máximo y el mínimo. +
		
		
			 Testeo con los siguientes valores
				(m=pepito;p = 50; t =-300(mal) ,-30(bien) )
				(m=teem;p = 10; t =0 )
				(m=llut;p = 150(mal), 15(bien); t =-13 )
				(m=fpy;p = 45; t =-12 )
*/

function mostrar()
{
	var marca;
	var temperatura;
	var peso;
	var temperaturaPar;
	var productoMasPesado;
	var productoGelido;
	var productoPromedioPeso;
	var sumaProductoPeso;
	var productoCantidad;
	var productoPesoMaximo;
	var productoPesoMaximoNombre;
	var productoPesoMinimo;
	var productoPesoMinimoNombre;

	productoGelido=0;
	productoCantidad=0;
	temperaturaPar=0;
	productoPromedioPeso=0;
	respuesta="si";
	sumaProductoPeso= 0;


	while (respuesta=="si"){

		do{
			marca=prompt("ingrese la marca del producto: ");
		}while(!isNaN(marca));

		do{
			peso=prompt("ingrese el peso del producto entre 1 y 100: ");
			peso=parseInt(peso);
		}while((isNaN(peso)) || (peso<1) || (peso>100));

		do{
			temperatura=prompt("ingrese temperatura de almacenamiento entre -30 y 30: ");
		}while(isNaN(temperatura) || (temperatura<-30) || (temperatura>30));
		//#################### Fin Validacion #################################
		//#####################################################################
		respuesta=prompt("quiere agregar otro producto? si para continuar");

		productoCantidad++;

		//#####################################################################
		
		if ((temperatura<0)){
		
			productoGelido++;
		}

		if (temperatura%2==0){
				temperaturaPar++;
		}

		//#################### Minimo #################################
		if ((productoCantidad==1) || (productoPesoMinimo>peso)){
			productoPesoMinimo = peso;
			productoPesoMinimoNombre = marca;
		}

		//#################### Maximo #################################
		if ((productoCantidad==1) || (productoPesoMaximo<peso)){
			productoPesoMaximo = peso;
			productoPesoMaximoNombre = marca;
		}
		sumaProductoPeso = sumaProductoPeso + peso;
		sumaProductoPeso=parseInt(sumaProductoPeso);
		
	}

	productoPromedioPeso = sumaProductoPeso/productoCantidad;

	//#################### Respuestas #################################
	//#####################################################################
	document.write(" cantidad de temperaturas pares: "+ temperaturaPar + "<br>");
	document.write(" marca del producto mas pesado: "+ productoPesoMaximoNombre + "<br>");
	document.write(" cantidad de productos que se conservan a menos de 0 grados: "+ productoGelido + "<br>");
	document.write(" El promedio del peso de todos los productos: "+ productoPromedioPeso + "<br>");
	document.write(" peso maximo: "+ productoPesoMaximo + "<br>");
	document.write(" peso minimo: "+ productoPesoMinimo + "<br>");
		
}
