// Fetch del json local
fetch("../data/loop.json")
  .then((response) => response.json())
  .then((data) => iterarEmpresa(data))
  .catch((error) => console.log(error));

//Función iterar empresas
let empresa = document.getElementById("dropdown");

let iterarEmpresa = (data) => {
  console.log(data.LoopBuilding);

  for (const oficina of data.LoopBuilding) {
    console.log(oficina.Empresa);
    console.log();
    empresa.innerHTML += `<select onclick= "dropdown" class="empres-select">
    <option value="Sourceful">${oficina.Empresa}</option>
             </select>`;
  }
};
//Funcion iterar personal
let personal = document.getElementById("dropdown2");

let iterarPersonal = (data) => {
  console.log(data.LoopBuilding);

  for (const encargado in LoopBuilding) {
    if (Object.hasOwnProperty.call(object, encargado)) {
      const element = object[encargado];
    }
  }
};
