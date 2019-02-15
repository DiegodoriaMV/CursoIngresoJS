function mostrar()
{
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

	alert(precioDeLoslibros)



}

/*
 en una tienda de libros existe una oferta por el cual si compra mas de los libros tiene un 
 10% en precio y si ademas supera los 2000$ se le hace un 15% 
 de descuento adicional recordar que si la compra es con tarjeta se debera agregar un 10% de recargo
 mostrar en un solo alert toda la informacion de la operacion
 */