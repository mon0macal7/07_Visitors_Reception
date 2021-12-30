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
  let keepImg = getBase64Img(document.getElementById("video"));
  console.log(keepImg);
});

// Se enciende la conexión con firestore
const db = firebase.firestore();

// // Aqui empieza la tabla
/*const table = document.getElementById("tabla");
window.addEventListener('DOMContentLoaded', async (e) => {

  await guardarObj.on("value", (registros) => {
    document.getElementById("tabla").innerHTML += "";
    registros.forEach((registro1) => {
      let registroData = registro1.val();
      console.log(registroData);
      document.getElementById("tabla").innerHTML += `
     <tr>
       <td>${registroData.nombre}</td>
       <td>${registroData.apellido}</td>
       <td>${registroData.correo}</td>
       <td>${registroData.empresa}</td>
       <td>${registroData.motivo}</td>
       <td>${registroData.cita}</td>
       <td>${registroData.encargado}</td>
     </tr>`;
    });
  });
}
// 

// const prueba = { ciela: "vania" };

// db.collection("visitantes")
//   .doc()
//   .set(prueba)
//   .then(() => {
//     console.log("prueba");
//   });*/

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
  };
  console.log(formulario);
  await guardarObj(formulario); //este await no funciona
});

const guardarObj = (formulario) => {
  console.log(formulario);
  db.collection("registro").doc().set(formulario);
};

//firebase.firestore();
console.log(db);

/*const save = () => {
    let buttonKeep = document.getElementById("enviar");
    buttonKeep.addEventListener("click", async (e) => {
      e.preventDefault();
      await entrada(formulario);
      console.log("clickenform");
    });
    
    //firebase keys
    
    // window.location.href = "./index.html";
    // Your web app's Firebase configuration
  
    // Initialize Firebase
  
    /* const db = firebase.firestore();
    const entrada = (objeto) => {
      db.collection("perrito").doc(objeto).set();
    };
  
  };
  save();
  */

// guardar datos de  form en un objeto

//

// console.log(formulario);
