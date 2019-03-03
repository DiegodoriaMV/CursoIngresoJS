function mostrar()
{
	var precio;
	var porsentajDeDescuento;
	var precioFinal;

	precio = prompt("ingrese el precio");
	porsentajDeDescuento = prompt("ingrese la canidad del descuento ")
	

	precio = parseInt(precio);
	porsentajDeDescuento = parseInt(porsentajDeDescuento);

	//precioFinal = precio * porsentajDeDescuento;
	precioFinal = precio * 0.90;


	document.getElementById('elPrecioFinal').value = precioFinal;


}
