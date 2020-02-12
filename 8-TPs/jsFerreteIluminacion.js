/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
···························································································
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
···························································································
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un 
descuento del 40 % y si es de otra marca el descuento es del 30%.
···························································································
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” 
se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
···························································································
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, 
si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
···························································································
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos 
brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() 
{
 	var valorLampara = 35;
 	var descuento;
 	var cantidadLampara = parseInt(document.getElementById('Cantidad').value);
 	var marcaLampara = document.getElementById('Marca').value;
 	var valorFinal;
 	var valorFinalConIIBB;

 	//Inciso A
 	if (cantidadLampara > 5)
 	{
 		descuento = 0.5;
 	}
 	//Inciso B
 	else
 	{
 		if ((cantidadLampara == 5) && (marcaLampara == "ArgentinaLuz"))
 		{
 			descuento = 0.6; 
 		}
 		else
 		{
 			descuento = 0.7; 
 		}
 		//Inciso C
	 	if (cantidadLampara == 4)
 		{
 			if ((marcaLampara=="ArgentinaLuz") || (marcaLampara=="FelipeLamparas"))
 			{
 				descuento = 0.75;
 			}
 			else
 			{
 				descuento = 0.8;
 			}

 		}
 		//Inciso D
 		else
 		{
 			if (cantidadLampara == 3)
 			{
 				if (marcaLampara=="ArgentinaLuz")
 				{
 					descuento = 0.85;
 				}
 				else
 				{
 					if (marcaLampara=="FelipeLamparas")
 					{
 						descuento = 0.9;
 					}
 					else
 					{
 						descuento = 0.95;
 					}
 				}
 			}
 		}
	

	}
	valorFinal = (cantidadLampara * valorLampara) * descuento;
	if(valorFinal > 120)
	{
		valorFinalConIIBB = valorFinal*0.1;
		valorFinal = valorFinal + valorFinalConIIBB;
		alert("Usted pago " + valorFinalConIIBB +" de IIBB.")
	}
	
	document.getElementById("precioDescuento").value = valorFinal;
}