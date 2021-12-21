
// // Fetch del json local
// fetch("../data/loop.json")
//   .then((response) => response.json())
//   .then((data) => iterarEmpresa(data))
//   .catch((error) => console.log(error));

// //Función iterar empresas
// let empresa = document.getElementById("dropdown");
// //Funcion iterar personal
// let personal = document.getElementById("dropdown2");

// let iterarEmpresa = (data) => {
//   console.log(data.LoopBuilding);

//   for (const oficina of data.LoopBuilding) {
//     console.log(oficina.Empresa);
//     console.log(oficina.Personal[3]);
//     empresa.innerHTML += `<select onclick= "dropdown" class="empres-select">
//     <option value="Sourceful">${oficina.Empresa}</option>
//             </select>`;
//     personal.innerHTML += `<select onclick = "dropdown2" class = "empres-select">
//     <option value = "Empleado">${oficina.Personal[3]}</option>
//             </select>`;
//   }
// };

const registrar = "../data/loop.json"
console.log(registrar);
let arrayEmpresas = [];
let arrayPersonal = [];

const traerData = () => {
  fetch(registrar)
  .then((response) => response.json(response))
  .then((data) => {
    arrayEmpresas.push(data);
    console.log(arrayEmpresas);

// iterar empresas
for (const empresa of arrayEmpresas[0].LoopBuilding) {
  console.log(empresa);
  // arrayPersonal.push(empresa);
  // console.log(arrayPersonal);
  let empresas = document.getElementById('dropdown');
  empresas.innerHTML += `<select onclick= "dropdown" class="empres-select">
        <option value = "Empresa">${empresa.Empresa}</option>
                </select>`
}

let empleados = document.getElementById('dropdown');

empleados.addEventListener('click', () => {
  let elegirEmpleado = document.getElementById('dropdown')
  // console.log(elegirEmpleado);
  console.log(arrayEmpresas[0].LoopBuilding);
  for (const empleado of arrayEmpresas[0].LoopBuilding) {
    console.log(empleado);
    let personal = document.getElementById('dropdown2')
    personal.innerHTML += `<select onclick= "dropdown" class="empres-select">
    <option value = "Empresa">${empleado.Personal}</option>
            </select>`
  }
})

})}
traerData();
