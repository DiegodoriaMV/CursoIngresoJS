function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
var mensaje;
//alert (mesDelAño);

switch(mesDelAño)
{
	case "Mayo":
	case "Junio":
	case "Nobiembre":
	case "Septiempre":
		mensaje ="tiene 30 dias"
		break;

	case "Febrero":
	 	mensaje = " tiene 28 dias";
	 	break;

	default:
	 	mensaje = "tiene 31 dias";
	 	break;

}
alert(mensaje);	
	



}//FIN DE LA FUNCIÓN