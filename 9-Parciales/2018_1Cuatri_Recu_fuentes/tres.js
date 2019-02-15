function mostrar()
{

	var precio;
	var cantidadAmigos;
	var cuenta;
	var precioA


	precio = prompt("ingrese es precio final");
	cantidadAmigos = prompt ("ingrese cuantos amigos");
	precioA = precio *1.10;

 	cuenta = precioA / cantidadAmigos;
	

	alert("el precio final es " + precio +" y la cantidad de amigos son " +cantidadAmigos+ " el precio mas la propina es " +precioA+ " y cada uno tiene q pagar " +cuenta );


}

/*en un restaurante  un grupo de amigos quiere saber cuanto debe pagar 
cada uno del total ; recordar que se debede agregar el 10%
 de propina y que los precios no incluyen el iva (21%) mostrar toda la informacion en un alert

*/

