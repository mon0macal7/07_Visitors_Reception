//-------------------Se atraen las pantallas---------------------------------------//
document.getElementById("pantalla1-login").hidden = false;
document.getElementById("pantalla2-visitantes").hidden = true;
//--------------------Función para generar login del administrador-----------------//
const entrada = document.getElementById("btn");
entrada.addEventListener("click", () => {
  let usuario = document.getElementById("mail").value;
  let contraseña = document.getElementById("password").value;
  if (usuario == "codepanthers884@gmail.com" && contraseña == phanters01) {
    document.getElementById("pantalla1-login").hidden = true;
    document.getElementById("pantalla2-visitantes").hidden = false;
  } else {
    alert("Usuario y/o contraseña incorrectos");
  }
});
