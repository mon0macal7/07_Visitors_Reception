let keepImg = "";

const registro = document.getElementById("btn-siguiente"); // Implementando screen cámara
registro.addEventListener("click", () => {
  document.getElementById("pantalla1-registro").hidden = true;
  document.getElementById("pantalla2-foto").hidden = false;
  const video = document.getElementById("video");
  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then((stream) => {
      video.srcObject = stream;
      console.log(stream);
    })
    .catch((error) => {
      console.log(error);
    });
  document.getElementById("tomarFoto").addEventListener("click", () => {
    tomarFoto();
  });
  // Funcion para pintar imagen en canvas
  function tomarFoto() {
    const canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
  }
});
const canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let video = document.getElementById("video");

// Guardar imagen en base 64
document.getElementById("tomarFoto").addEventListener("click", () => {
  function getBase64Img(video) {
    let canvas = document.createElement("canvas");
    let ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
    let dataURL = canvas.toDataURL();
    return dataURL;
  }
  keepImg = getBase64Img(document.getElementById("video"));
  console.log(keepImg);
});

const db = firebase.firestore();

let fecha = new Date()

const registroVisitantes = document.getElementById("enviar");
registroVisitantes.addEventListener("click", async (e) => {
  e.preventDefault();

  let formulario = {
    nombre: document.getElementById("nombre").value,
    apellido: document.getElementById("apellido").value,
    correo: document.getElementById("mail").value,
    empresa: document.getElementById("dropdown").value,
    motivo: document.getElementById("dropdown1").value,
    cita: document.getElementById("cita").value,
    encargado: document.getElementById("dropdown2").value,
    date: fecha,
    foto:  keepImg
  };
  console.log(formulario);
  await guardarObj(formulario); //este await no funciona
  setTimeout (()=>{
    alert('Tu registro fue exitoso!')
    window.location.href = "./index.html"
  }, 1500) 
});

const guardarObj = (formulario) => {
  console.log(formulario);
  db.collection("registro").doc().set(formulario);
};

//firebase.firestore();

