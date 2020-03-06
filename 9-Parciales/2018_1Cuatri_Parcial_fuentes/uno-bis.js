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
	var cantReservas=0;
	var diasPorReserva=0;
	var promedioDiasPorReserva;

	cantidadEfectivo=0;
	cantidadTarjeta=0;
	cantidadQR=0;

	var contador;
	var contadorDias;
	var respuesta="S";
	contador=0;
	contadorDias=0;

	while (respuesta=="S"){

		//························································
		//nombre del huésped

		nombreHuesped=prompt("Ingrese nombre: ");
		//························································
		//cantidad de personas 
	
		do{
			cantidadPersonas=prompt("ingrese cantidad de personas: ");
			cantidadPersonas=parseInt(cantidadPersonas);
		}while (isNaN(cantidadPersonas) || (cantidadPersonas<1 && cantidadPersonas>20));
		//························································
		//cantidad de dias de estadia 

		do{
			diasEstadia=prompt("ingrese cantidad de dias: ");
			diasEstadia=parseInt(diasEstadia);
			diasPorReserva = diasPorReserva + diasEstadia;
			cantReservas++;
		}while (isNaN(diasEstadia) || (diasEstadia<1 && diasEstadia>15))
		//························································
		//forma de pago(efectivo , tarjeta o QR)
		do{
			formaPago=prompt("como abonara? (efectivo / tarjeta / qr:");
		}while((!isNaN(formaPago)) || ((formaPago != "efectivo") && (formaPago != "tarjeta") && (formaPago!= "qr")))
		//························································
		//informar el huésped que trajo más personas en una sola reserva.

		if ((contador==0)|| (cantidadPersonas>maximoCantPersonas)){
			maximoCantPersonas=cantidadPersonas;
			maximoCantPersonasNombre=nombreHuesped;
		}
		//························································
		//la cantidad de personas que se quedaron más días

		if ((contadorDias==0)|| (diasEstadia>maximoCantDias)){
			maximoCantDias=diasEstadia;
			maximoCantDiasPersonas=cantidadPersonas;
		}
		//························································
		//la forma de pago más utilizada.

		switch (formaPago){
			case "qr":
				cantidadQR++;
				break;
			case "tarjeta":
				cantidadTarjeta++;
				break;
			default:
				cantidadEfectivo++;
		}
		//···························
		
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
		//························································
		
		respuesta=prompt("quiere ingresar mas datos? S para continuar");
		contador++;
	}

//························································
//el promedio de cantidad de días por reserva
promedioDiasPorReserva = diasPorReserva/cantReservas;

//························································
// RESPUESTAS

document.write("El huesped que rtajo mas personas es "+ maximoCantPersonasNombre + "<br>");
document.write("La cantidad de personas que se quedaron mas dias son: "+ maximoCantDiasPersonas + "<br>");
document.write("La forma de pago mas usada es: "+ formaPagoMasUsada + "<br>");
document.write("El promedio de dias por reserva es: "+ promedioDiasPorReserva + "<br>");



}
