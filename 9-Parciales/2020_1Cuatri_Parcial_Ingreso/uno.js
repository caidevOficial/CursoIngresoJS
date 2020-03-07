/*
	Debemos realizar la carga de 5 (cinco) productos de prevencion de contagio, de cada una devo obtener los siguientres datos:<br>
        El tipo (validar "barbijo", "jabon" o "alcohol")<br>
        El precio: (validar entre 100 y 300)<br>
        La cantidad de unidades ( no puede ser 0 ni negativo y no debe superar las 1000 unidades)<br>
        La marca y el Fabricante.<br>
        
        Se debe informar lo siguiente:<br>
        A) Del mas caro de los barbijos, la cantidad de unidades y el fabricante.<br>
        B) Del item con mas unidades, el fabricante.<br>
        C) Cuantas unidades de jabones hay en total.
*/
function mostrar()
{
	var tipoProducto;
	var precioProducto;
	var cantidadProducto;
	var marcaProducto;
	var fabricanteProducto;

	var barbijoMasCaroPrecio;
	var barbijoMasCaroFabricante;
	var barbijoMasCaroCantidad;

	var cantidadProductoMasUnidades;
	var cantidadProductoMasUnidadesTipo;
	var cantidadProductoMasUnidadesFabricante;


	var contador;
	var contadorBarbijos;
	var contadorJabones;

	contadorBarbijos=0;
	contador=0;
	contadorJabones=0;
	precioProducto=0;
	cantidadProductoMasUnidades=0;

	while (contador<5){

		//························································
		//Tipo de producto (barbijo, alcohol o jabon) 
		contador++;
		do{
			tipoProducto = prompt("Por favor, ingrese el tipo de producto: ")
		}while (!isNaN(tipoProducto) || ((tipoProducto!="barbijo") && (tipoProducto!="alcohol") && (tipoProducto!="jabon")));
		//························································
		//Precio entre 100 y 300 inclusive 
		do{
			precioProducto = prompt("Por favor, ingrese el precio del producto: ");
			precioProducto = parseInt(precioProducto);
		}while (isNaN(precioProducto) || ((precioProducto<100)|| (precioProducto>300)));
		
		//Cantidad entre 1 y 1000 inclusive 
		do{
			cantidadProducto = prompt("Por favor, ingrese la cantidad de unidades del producto: ")
			cantidadProducto = parseInt(cantidadProducto);
		}while (isNaN(cantidadProducto) || ((cantidadProducto<1)|| (cantidadProducto>1000)));
		
		//Marca (por capricho no puede ser un numero)
		do{
			marcaProducto = prompt("Por favor, ingrese la marca del producto: ")
		}while (!isNaN(marcaProducto));
		
		//Fabricante (por capricho no puede ser un numero)
		do{
			fabricanteProducto = prompt("Por favor, ingrese el fabricante del producto: ")
		}while (!isNaN(fabricanteProducto));
		
		
		switch (tipoProducto){
			//A) Del mas caro de los barbijos, la cantidad de unidades y el fabricante.
			case "barbijo":
				contadorBarbijos++;
				if ((contadorBarbijos==1)||(barbijoMasCaroPrecio<precioProducto)){
					barbijoMasCaroPrecio = precioProducto;
					barbijoMasCaroCantidad = cantidadProducto;
					barbijoMasCaroFabricante = fabricanteProducto;
				}
				break;
			//C) Cuantas unidades de jabones hay en total
			case "jabon":
				contadorJabones = contadorJabones + cantidadProducto;
				break;
			default:
		}

		//A) Del mas caro de los barbijos, la cantidad de unidades y el fabricante.
		/*
		if (tipoProducto=="barbijo"){
			contadorBarbijos++;
			if ((contadorBarbijos==1)||(barbijoMasCaroPrecio<precioProducto)){
				barbijoMasCaroPrecio = precioProducto;
				barbijoMasCaroCantidad = cantidadProducto;
				barbijoMasCaroFabricante = fabricanteProducto;
			}
		}
		*/

		//B) Del item con mas unidades, el fabricante.
		if ((contador==1)||cantidadProductoMasUnidades<cantidadProducto){
			cantidadProductoMasUnidades = cantidadProducto;
			cantidadProductoMasUnidadesFabricante = fabricanteProducto;
			cantidadProductoMasUnidadesTipo = tipoProducto;
		}

		//C) Cuantas unidades de jabones hay en total
		/*
		if (tipoProducto=="jabon"){
			contadorJabones = contadorJabones + cantidadProducto;
		}
		*/
	}

//························································
// RESPUESTAS

document.write("El barbijo mas caro lo fabrica: "+ barbijoMasCaroFabricante + " y hay stock de " + barbijoMasCaroCantidad + "<br>");
document.write("El item con mas unidades es: "+ cantidadProductoMasUnidadesTipo + " y su fabricante es " + cantidadProductoMasUnidadesFabricante +"<br>");
document.write("En stock hay: "+ contadorJabones + " unidades de jabon.<br>");
}
