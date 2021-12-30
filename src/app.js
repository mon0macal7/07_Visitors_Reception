<<<<<<< HEAD


=======
//import {pintarDatos} from "./visitors.js"
//pintarDatos();
>>>>>>> a7c521dcf1a0de74dee400f57bbc108782401514

//-------------------Se atraen las pantallas---------------------------------------//
document.getElementById("pantalla1-login").hidden = false;
document.getElementById("pantalla2-visitantes").hidden = true;
//--------------------Función para generar login del administrador-----------------//
const entrada = document.getElementById("btn");
entrada.addEventListener("click", () => {
  let usuario = document.getElementById("mail").value;
  let contraseña = document.getElementById("password").value;
  if (usuario == "codepanthers884@gmail.com" && contraseña == 1) {
    document.getElementById("pantalla1-login");
    window.location.href = "./dash.html";
  } else {
    alert("Usuario y/o contraseña incorrectos");
  }
});
