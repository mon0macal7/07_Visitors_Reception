// Fetch del json local
fetch("../data/loop.json")
  .then((response) => response.json())
  .then((data) => iterarEmpresa(data))
  .catch((error) => console.log(error));

//Función iterar empresas
let empresa = document.getElementById("dropdown");
//Funcion iterar personal
let personal = document.getElementById("dropdown2");

let iterarEmpresa = (data) => {
  console.log(data.LoopBuilding);

  for (const oficina of data.LoopBuilding) {
    console.log(oficina.Empresa);
    console.log();
    empresa.innerHTML += `<select onclick= "dropdown" class="empres-select">
    <option value="Sourceful">${oficina.Empresa}</option>
            </select>`;
    personal.innerHTML += `<select onclick = "dropdown2" class = "empres-select">
    <option value = "Empleado">${oficina.Personal}</option>
            </select>`;
  }
};

