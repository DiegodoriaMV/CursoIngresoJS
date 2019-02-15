function mostrar()
{
  
	var compra;
	var descuento;
	var precioIva;

	compra =prompt("ingrese el precio de su compra");
	
	descuento = compra * 0.90;

	precioIva = descuento * 1.21;

	alert("tu compra es de  $"+compra +" tenes un descuento de 10% queda en $" + descuento+ " mas el iva es de $" + precioIva);




}

/*
2 alert ("tu compra es de $xxxx tenes un descuento de 10% queda en $ mas el iva(21%) es $xxxx")
*/