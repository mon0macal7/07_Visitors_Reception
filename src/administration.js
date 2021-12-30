
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

      <td>${doc.data().date.toDate().toDateString()}</td>
    </tr>
     <td> <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#${doc.id}">
 <i class="bi bi-image-fill"></i>
</button></td>
    </tr>
    <div class="modal fade" id="${doc.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Foto</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-dialog modal-fullscreen-sm-down">
  <img  src="${doc.data().foto}">
</div>

      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div>`
      
    
  });
});

