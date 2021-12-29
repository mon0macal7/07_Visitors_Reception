/*const onGetData = (callback) =>
  db.collection("regVisitantes").onSnapshot(callback);

export async function pintarDatos() {
  onGetData((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      let visit = doc.data();
      visit.id = doc.id;
      console.log(visit);
      traerData.push(visit);
    });

    // Se le pasan los datos de firebase a la variable arrayVisiantes
    arrayVisitantes = traerData;
    console.log(arrayVisitantes);
    pintarRegistro();
  });
}

// Se crea la funcion que servirá para pintar a los vistantes dentro de la tabla

let pintarRegistro = () => {
  console.log(arrayVisitantes.length);
  let tabla = arrayVisitantes[0];
  console.log(tabla.nombre);

  // Se hace una iteracion con for of
  for (const tabla of arrayVisitantes) {
    document.getElementById("tabla").innerHTML += `
  <tr>
        <td>${tabla.nombre}</td>
          <td>${tabla.apellido}</td>
          <td>${tabla.correo}</td>
          <td>${tabla.empresa}</td>
          <td>${tabla.motivo}</td>
          <td>${tabla.cita}</td>
          <td>${tabla.encargado}</td>
        </tr>
  `;
  }
};
*/
// const prueba = { ciela: "vania" };

// db.collection("visitantes")
//   .doc()
//   .set(prueba)
//   .then(() => {
//     console.log("prueba");
//   });
