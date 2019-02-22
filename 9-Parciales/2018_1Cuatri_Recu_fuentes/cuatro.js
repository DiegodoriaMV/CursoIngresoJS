function mostrar()
{

	var importe1;
	var importe2 ;
	var importe3 ;
	var importe4 ;
	var mayor;
	var suma;
	var elTotal;

	importe1 = prompt("ingrese el primer importe");
	importe2 = prompt("ingrese el segundo importe");
	importe3 = prompt("ingrese el tercer importe");
	importe4 = prompt("ingrese el cuarto importe");

	importe1 =parseInt(importe1);
	importe2 =parseInt(importe2);
	importe3 =parseInt(importe3);
	importe4 =parseInt(importe4);

//quien es mayor

	if (importe1 > importe2) 
	{
		mayor = importe1
	
	} 	else 
			{	if (importe2 > importe3) 
				{
					mayor = importe2
				}	else
						{	
							if (importe3 > importe4) 
							{
								mayor = importe3
							} 	else 	
									{	if (importe4 > importe1) 
										{
											mayor = importe4
										}

									}
						}

			}

//        quien es mayor


	suma = importe2 + importe4 + importe3+ importe4;


	if (suma > 100) 
		{
			elTotal = suma * 0.90
		} else 
			{
				if (suma < 100 && suma > 50) 
					{
						elTotal = suma * 0.95
					} else 
						{
							if (suma < 50) 
								{
									elTotal = suma * 1.15	
								}
						}
			}


	alert("la suma da " +suma+ " y el mayor es " + mayor + " y el total a pagar es de " + elTotal ); 







/*
4 importes
mostrar el mayor 10 ,20 ,30 ;40  = 40

se suma todo
supera los 100 se le hace un descuento de 10%
supera los 50 se le ahce un descuento de 5%
el maximo al y el precio a pagar

*/



}


























/*

	var cantidadDeLibros;
	var precioDeLoslibros
	var cuenta;
	var tarjetaOefectivo;


	cantidadDeLibros =	prompt("Cuatos libros compro?");
	
	precioDeLoslibros =  prompt("ingrese el precio total de los libro");

	tarjetaOefectivo = prompt("Si paga con efectivo ponga 1 si para con tarjeta ponga 2");

	if (cantidadDeLibros > 5) {
		precioDeLoslibros = precioDeLoslibros * 0.10; 

	} if (precioDeLoslibros > 2000) {
		precioDeLoslibros = precioDeLoslibros * 0.15;
	}

	if (tarjetaOefectivo == 2 ) {
		precioDeLoslibros = precioDeLoslibros + 0.10;
	}

	alert(precioDeLoslibros)*/

/*
 en una tienda de libros existe una oferta por el cual si compra mas de los libros tiene un 
 10% en precio y si ademas supera los 2000$ se le hace un 15% 
 de descuento adicional recordar que si la compra es con tarjeta se debera agregar un 10% de recargo
 mostrar en un solo alert toda la informacion de la operacion
 */