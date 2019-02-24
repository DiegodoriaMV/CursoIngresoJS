/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	
	var	suImporte;	
	var cuenta;


	suImporte= document.getElementById('importe').value;
	suImporte= parseInt(suImporte);

	cuenta = suImporte * 0.75;

	document.getElementById('resultado').value= cuenta;
}
