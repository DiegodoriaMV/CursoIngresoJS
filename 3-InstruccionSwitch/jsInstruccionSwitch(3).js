function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
var mensaje;

//alert (mesDelAño);
	
switch(mesDelAño)
{
	case "Febrero":
	 	mensaje = "ESTE MES TIENE 29 DIAS";
	 	break;
	default:
	 	mensaje = "este mes tiene mas 30 o mas dias";
	 	break;

}
alert(mensaje);	


}//FIN DE LA FUNCIÓN