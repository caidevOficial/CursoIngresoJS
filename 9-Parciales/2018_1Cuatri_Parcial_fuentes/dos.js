/* mostrar por alert el mensaje "usted es  xxxxx y vive en la localidad de xxxxxxxx".*/
function mostrar()
{
  var name;
  var location;

  name = document.getElementById('elNombre').value;
  location = document.getElementById('laLocalidad').value;

  Alert("Usted es " + name + " y vive en " + location);
}
