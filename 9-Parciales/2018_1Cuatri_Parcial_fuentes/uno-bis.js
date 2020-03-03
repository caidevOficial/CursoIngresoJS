/*
	b)Para la gestión de un hotel,
	ingresar los siguientes datos validados de una reserva
	nombre del huésped
	cantidad de personas 
	cantidad de dias de estadia 
	forma de pago(efectivo , tarjeta o QR)

	informar el huésped que trajo más personas en
	una sola reserva. - if

	la cantidad de personas que se quedaron más días - if

	la forma de pago más utilizada. - switch
	el promedio de cantidad de días por reserva - acumulador y contador
*/

function mostrar()
{
	var nombreHuesped;
	var cantidadPersonas;
	var diasEstadia;
	var formaPago;
	
	var maximoCantPersonas;
	var maximoCantPersonasNombre;
	var maximoCantDias;
	var maximoCantDiasPersonas;

	var cantidadQR;
	var cantidadTarjeta;
	var cantidadEfectivo;
	var formaPagoMasUsada;

	var contador;
	var contadorDias;
	var respuesta="S";
	contador=0;

	while (respuesta=="S"){
		nombreHuesped=prompt("Ingrese nombre: ");
		//························································
		
		do{
			cantidadPersonas=prompt("ingrese cantidad de personas: ");
			cantidadPersonas=parseInt(cantidadPersonas);
		}while (isNaN(cantidadPersonas) || (cantidadPersonas<1 && cantidadPersonas>20));
		//························································
		
		do{
			diasEstadia=prompt("ingrese cantidad de dias: ");
			diasEstadia=parseInt(diasEstadia);
		}while (isNaN(diasEstadia) || (diasEstadia<1 && diasEstadia>15))
		//························································
		
		do{
			formaPago=prompt("como abonara? (EFECTIVO/TARJETA/QR:");
		}while(!isNaN(formaPago) || formaPago!="EFECTIVO" || formaPago!="TARJETA" || formaPago!="QR")
		//························································
		
		if ((contador==0)|| (cantidadPersonas>maximoCantPersonas)){
			maximoCantPersonas=cantidadPersonas;
			maximoCantPersonasNombre=nombreHuesped;
		}
		//························································
		
		if ((contadorDias==0)|| (diasEstadia>maximoCantDias)){
			maximoCantDias=diasEstadia;
			maximoCantDiasPersonas=cantidadPersonas;
		}
		
		switch (formaPago){
			case "QR":
				cantidadQR++;
				break;
			case "TARJETA":
				cantidadTarjeta++;
				break;
			default:
				cantidadEfectivo++;
		}

		if((cantidadQR>cantidadEfectivo)&&(cantidadQR>cantidadTarjeta)){
			
				formaPagoMasUsada="QR";
			}
			else{
				if (cantidadTarjeta>cantidadEfectivo){
					formaPagoMasUsada="TARJETA";
				}
				else{
					formaPagoMasUsada="EFECTIVO";
				}
			
			}
		respuesta=prompt("S para continuar");
		contador++;
	}





}
