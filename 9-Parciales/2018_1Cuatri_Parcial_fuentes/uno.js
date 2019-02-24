
function mostrar()
{
	var ancho;
	var largo;
	var perimetro;

	ancho = prompt('ingrese el ancho del rectangulo');
	largo = prompt('ingrese el largo del rectangulo');

	ancho = parseInt(ancho);
	largo = parseInt(largo);

	perimetro= (largo + ancho) * 2;

	alert("el perimetro es " + perimetro );
}
