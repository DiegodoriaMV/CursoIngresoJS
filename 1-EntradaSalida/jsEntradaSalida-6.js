/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var num1;
	var num2;
	var suma;

	num1 =document.getElementById('numeroUno').value;
	num2 =document.getElementById('numerosDos').value;

	suma =  num1 + num2;


	alert(suma);


}

