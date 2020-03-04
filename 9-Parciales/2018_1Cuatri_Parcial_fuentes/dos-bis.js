/* 
** De los movimientos de un banco necesito saber:
A- ·Promedio de edad
B- ·Nombre de mas joven.
C- ·Cantidad de hombres.
D- ·Cantidad de mujeres.
E- ·Sexo del importe mas alto.
F- ·Operacion mas usada.
G- ·Importe del mas viejo.

	1 - el nombre del cliente.
	2 - la edad (debe ser mayor de edad).
	3 - sexo del cliente.
	4 - tipo de transaccion (extraccion o deposito)
	5 - importe (extraido o depositado [no puede ser negativo]).

**/
function mostrar()
{
  var nombreCliente;
  var nombreClienteMasJoven;
  var edadCliente;
  var edadClienteMasJoven;
  var edadClienteMasViejo;
  var sexoCliente;
  var sexoclienteImporteTransaccionMasAlto;
  var sexoclienteImporteTransaccionMasAltoRenombrado;
  var definicionSexo;

  var tipoTransaccion;
  var importeTransaccion;
  var importeTransaccionMasAlto;
  var transaccionMasUsada;
  var cantidadDeposito;
  var cantidadExtraccion;
  var importeDelMasViejo;

  var cantidadClientes;
  var cantidadHombres;
  var cantidadMujeres;
  
  var sumaEdades;
  var promedioEdad;

  var respuesta="s";
  
  sumaEdades=0;
  cantidadClientes=0;
  cantidadMujeres=0;
  cantidadHombres=0;
  importeTransaccion=0;
  importeTransaccionMasAlto=0;
  cantidadExtraccion=0;
  cantidadDeposito=0;
  importeDelMasViejo=0;

  while (respuesta=="s"){

  	//············································································
  	//Validacion de nombre distinto a numero

  	do{
  		nombreCliente=prompt("ingrese su nombre: ");
  	}while (!isNaN(nombreCliente));

  	//············································································
  	// validar edad cliente.

  	do{
  		edadCliente=prompt("ingrese su edad: ");
  		edadCliente=parseInt(edadCliente);
      sumaEdades=sumaEdades+edadCliente;
  	}while (isNaN(edadCliente)||(edadCliente<18)||(edadCliente>125));

    //············································································
  	// validar sexo m o f.

  	do{
  		sexoCliente=prompt("ingrese su sexo (m / f): ")

  	}while(!isNaN(sexoCliente)||((sexoCliente!="m")&&(sexoCliente!="f")));

  	//············································································
  	// validar tipo transaccion
  	do{
  		tipoTransaccion=prompt("que transaccion hará? (extraccion / deposito) ")
  	}while (!isNaN(tipoTransaccion)||((tipoTransaccion!="extraccion")&&(tipoTransaccion!="deposito")));

  	//············································································
  	// validar importe transaccion
  	do{
  		importeTransaccion=prompt("Ingrese el importe: ");
  		importeTransaccion=parseInt(importeTransaccion);
  	}while(((importeTransaccion<0)||(importeTransaccion>5000)) || (isNaN(importeTransaccion)));

    cantidadClientes++;

    //informar el sexo del cliente con la ams alta transaccion.

    if ((cantidadClientes==0)|| (importeTransaccion>importeTransaccionMasAlto)){
      importeTransaccionMasAlto=importeTransaccion;
      sexoclienteImporteTransaccionMasAlto=sexoCliente;
          if (sexoclienteImporteTransaccionMasAlto=="m"){
            sexoclienteImporteTransaccionMasAltoRenombrado="Masculino";
          }
          else{
            sexoclienteImporteTransaccionMasAltoRenombrado="Femenino";
          }
    }
  
    //············································································
    // saber cantidad de hombres y mujeres
    if (sexoCliente=="m"){
        cantidadHombres++;
        definicionSexo="Masculino";
      }
      else{
        cantidadMujeres++;
        definicionSexo="Femenino";
      }

    //············································································
    // saber cantidad de depositos y extracciones
    if (tipoTransaccion=="deposito"){
      cantidadDeposito++;
    }
    else{
      cantidadExtraccion++;
    }

    //informar el importe del cliente mas viejo.

    if ((cantidadClientes==1)|| (edadClienteMasViejo<edadCliente)){
      edadClienteMasViejo=edadCliente;
      importeDelMasViejo=importeTransaccion;
    }

    //informar el nombre del cliente mas joven.

    if ((cantidadClientes==1)|| (edadClienteMasJoven>edadCliente)){
      edadClienteMasJoven=edadCliente;
      nombreClienteMasJoven=nombreCliente;
    }

    
    
    respuesta=prompt("desea continuar? (s / n)");
  }
  // ············· FIN DEL WHILE ····················
  //············································································
  
  //·············promedio de edades
  sumaEdades=parseInt(sumaEdades);
  promedioEdad=sumaEdades/cantidadClientes;
  
  //···········transaccion mas usada·
  if(cantidadDeposito>cantidadExtraccion){
    transaccionMasUsada="Deposito";
  }
  else{
    transaccionMasUsada="Extraccion";
  }
  //············································································
  // RESPUESTAS
  document.write("El promedio de edades es: "+promedioEdad+"<br>")
  document.write("El cliente mas joven es "+nombreClienteMasJoven+"<br>");
  document.write("cantidad de clientes masculinos "+cantidadHombres+"<br>");
  document.write("cantidad de clientes femeninos "+cantidadMujeres+"<br>");
  document.write("El sexo del cliente con la transaccion mas alta es "+sexoclienteImporteTransaccionMasAltoRenombrado+"<br>");
  document.write("La transaccion mas usada es "+transaccionMasUsada+"<br>");
  document.write("El importe del cliente mas viejo es "+importeDelMasViejo+"<br>");
  
  /*alert("El nombre ingresado es: "+nombreCliente);
  alert("El sexo de "+nombreCliente+" es "+definicionSexo);
  alert("La edad de "+nombreCliente+" es "+edadCliente+" Años.");
  alert("El tipo de operacion que hizo es "+tipoTransaccion);
  alert("El monto operado es "+importeTransaccion+" Yenes");
*/}
