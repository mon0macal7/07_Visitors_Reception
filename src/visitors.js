// Fetch del json local
fetch("../data/loop.json")
  .then((response) => response.json())
  .then((data) => iterarEmpresa(data))
  .catch((error) => console.log(error));

let iterarEmpresa = (data) => {
  console.log(data.LoopBuilding);
  for (const empresa of data.LoopBuilding) {
  }
};
