const registro = document.getElementById("btn-siguiente");
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

  function tomarFoto() {
    const canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
  }
});
const canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let video = document.getElementById("video");

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

//arreglos para añadir los registros
let traerData = [];
let arrayVisitantes = [];

// Se enciende la coneccion con firestore
const db = firebase.firestore();
// // Aqui empieza la tabla
// const table = document.getElementById('tabla')

// window.addEventListener('DOMContentLoaded', async (e) =>{
//   await guardarObj.on('value', (registros) => {
//   document.getElementById('tabla').innerHTML += ''
//   registros.forEach((registro1) => {
//     let reistroData = registro1.val()
//     document.getElementById('tabla').innerHTML += `
//     <tr>
//       <td>${reistroData.nombre}</td>
//       <td>${reistroData.apellido}</td>
//       <td>${reistroData.correo}</td>
//       <td>${reistroData.empresa}</td>
//       <td>${reistroData.motivo}</td>
//       <td>${reistroData.cita}</td>
//       <td>${reistroData.encargado}</td>
//     </tr>`
//   })

const onGetData = (callback) => db.collection('regVisitantes').onSnapshot(callback)

export async function pintarDatos() {
  onGetData((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      let visit = doc.data()
      visit.id = doc.id
      console.log(visit);
      traerData.push(visit)
    })

// Se le pasan los datos de firebase a la variable arrayVisiantes
  arrayVisitantes = traerData
  console.log(arrayVisitantes);
  pintarRegistro();
  })
}

// Se crea la funcion que servirá para pintar a los vistantes dentro de la tabla

let pintarRegistro = () => {
  console.log(arrayVisitantes.length);
  let tabla = arrayVisitantes[0];
  console.log(tabla.nombre);

// Se hace una iteracion con for of
for (const tabla of arrayVisitantes) {
  document.getElementById('tabla').innerHTML += `
  <tr>
        <td>${tabla.nombre}</td>
          <td>${tabla.apellido}</td>
          <td>${tabla.correo}</td>
          <td>${tabla.empresa}</td>
          <td>${tabla.motivo}</td>
          <td>${tabla.cita}</td>
          <td>${tabla.encargado}</td>
        </tr>
  `
}
}

// const prueba = { ciela: "vania" };

// db.collection("visitantes")
//   .doc()
//   .set(prueba)
//   .then(() => {
//     console.log("prueba");
//   });

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
    foto: document.getElementById("tomarFoto").value,
  };
  console.log(formulario);
  await guardarObj(formulario);
});

const guardarObj = (formulario) => {
  console.log(formulario);
  db.collection("registro").doc().set(formulario);

  window.location.href = "./index.html"
};

//firebase.firestore();
console.log(db);

/*const registrar = "../data/loop.json";
console.log(registrar);
let arrayEmpresas = [];
let arrayPersonal = [];

const traerData = () => {
  fetch(registrar)
    .then((response) => response.json(response))
    .then((data) => {
      arrayEmpresas.push(data);
      console.log(arrayEmpresas);
      iterarEmpresas(arrayEmpresas[0].LoopBuilding);
    });
};

// iterar empresas
const iterarEmpresas = (arraydeEmpresas) => {
  for (const [index, empresa] of arraydeEmpresas.entries()) {
    //console.log(empresa);

    let empresas = document.getElementById("dropdown");
    empresas.innerHTML += `
        <option onclick= "selectEmpresa('${index}')">${empresa.Empresa}</option>
                `;
    //console.log(empresas);
  }
};
let selectEmpresa = (index) => {
  console.log(arrayEmpresas[0].LoopBuilding[index].Personal);
  let empleados = document.getElementById("dropdown2");
  empleados.innerHTML = "";
  for (const empleado of arrayEmpresas[0].LoopBuilding[index].Personal) {
    console.log(empleado);

    empleados.innerHTML += `<option>${empleado} </option>`;
    //console.log(empleados);
  }
};
traerData();*/

/*const save = () => {
  let buttonKeep = document.getElementById("enviar");
  buttonKeep.addEventListener("click", async (e) => {
    e.preventDefault();
    await entrada(formulario);
    console.log("clickenform");
  });

  //firebase keys

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
