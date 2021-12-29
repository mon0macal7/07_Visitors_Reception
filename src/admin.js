const registrar = "../data/loop.json"; // Fetch para traer json local
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

// iterar empresas de manera dinámica
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
//Iterar personal al seleccionar empresa
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
traerData();
