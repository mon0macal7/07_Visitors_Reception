// Se enciende la conexión con firestore
const db = firebase.firestore();
console.log(db);
//Listar datos
db.collection("registro").onSnapshot((querySnapshot) => {
  tabla.innerHTML = '';
  querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
      tabla.innerHTML += `
      <tr>
      <td>${doc.data().nombre}</td>
      <td>${doc.data().apellido}</td>
      <td>${doc.data().correo}</td>
      <td>${doc.data().empresa}</td>
      <td>${doc.data().motivo}</td>
      <td>${doc.data().cita}</td>
      <td>${doc.data().encargado}</td>
      <td>${doc.data().date.toDate().toLocaleTimeString().toDateString()}</td>
    </tr>`
  });
});

