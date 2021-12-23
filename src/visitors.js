// Import the functions you need from the SDKs you need

const db = firebase.firestore();
const prueba = { ciela: "vania" };

db.collection("visitantes")
  .doc()
  .set(prueba)
  .then(() => {
    console.log("prueba");
  });



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
    foto: document.getElementById('tomarFoto').value
  };
console.log(formulario);
    await guardarObj(formulario);

});

const guardarObj = (formulario) =>{
  console.log(formulario);
  db.collection("registro").doc().set(formulario);

}

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
