/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	var suSueldo;
	var cuenta;

	suSueldo= document.getElementById('sueldo').value;

	suSueldo= parseInt(suSueldo);

	cuenta= suSueldo * 1.10;

	document.getElementById('resultado').value=  cuenta;












	
}
