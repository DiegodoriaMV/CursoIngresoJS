/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var primerNumero;
	var segundoNumero;
	var suma;

	primerNumero= document.getElementById('numeroUno').value;
	segundoNumero= document.getElementById('numeroDos').value;

	primerNumero= parseInt(primerNumero);
	segundoNumero= parseInt(segundoNumero);

	suma = primerNumero + segundoNumero;


	alert("La suma " + suma);

}

function restar()
{
	var primerNumero;
	var segundoNumero;
	var resta;

	primerNumero= document.getElementById('numeroUno').value;
	segundoNumero= document.getElementById('numeroDos').value;

	primerNumero= parseInt(primerNumero);
	segundoNumero= parseInt(segundoNumero);

	resta = primerNumero - segundoNumero;


	alert("La resta " + resta);

}

function multiplicar()
{ 
	var primerNumero;
	var segundoNumero;
	var multi;

	primerNumero= document.getElementById('numeroUno').value;
	segundoNumero= document.getElementById('numeroDos').value;

	primerNumero= parseInt(primerNumero);
	segundoNumero= parseInt(segundoNumero);

	multi = primerNumero + segundoNumero;


	alert("La multi " + multi);

}

function dividir()
{
	var primerNumero;
	var segundoNumero;
	var divi;

	primerNumero= document.getElementById('numeroUno').value;
	segundoNumero= document.getElementById('numeroDos').value;

	primerNumero= parseInt(primerNumero);
	segundoNumero= parseInt(segundoNumero);

	divi = primerNumero / segundoNumero;


	alert("La division da" + divi);

}

