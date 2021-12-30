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
     <td> <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
 <i class="bi bi-image-fill"></i>
</button></td>
    </tr>
    <div class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>`
      
    
  });
});

