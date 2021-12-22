//     import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js"; // Import the functions you need from the SDKs you need
//     import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics.js";
//     // TODO: Add SDKs for Firebase products that you want to use
//     // https://firebase.google.com/docs/web/setup#available-libraries

//     // Your web app's Firebase configuration
//     // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//     const firebaseConfig = {
//         apiKey: "AIzaSyCKlJxglkf3NDrZmF4n8qTqSDE2RVCPxF8",
//         authDomain: "visitors-reception-da4ea.firebaseapp.com",
//         databaseURL: "https://visitors-reception-da4ea-default-rtdb.firebaseio.com",
//         projectId: "visitors-reception-da4ea",
//         storageBucket: "visitors-reception-da4ea.appspot.com",
//         messagingSenderId: "1088372954140",
//         appId: "1:1088372954140:web:be5f6aa69357d5c2d17bd9",
//         measurementId: "G-11729322H3"
//     };

//     // Initialize Firebase
//     const app = initializeApp(firebaseConfig);
//     const db = getFirestore();
//     const analytics = getAnalytics(app);

//     const saveUser = (user) => {
//     import { collection, addDoc } from "firebase/firestore";

// try {
//     const docRef = await addDoc(collection(db, "usuarios"), {
//     user
//     });
//     mensaje();
// } catch (e) {
//     mensajeError();
// }
//     }
// const mensaje = () => {
//     Swal.fire(
//         'Good job!',
//         'You clicked the button!',
//         'success'
//     )
// }

// const mensajeError = () => {
//     Swal.fire(
//         'Upss!',
//         'Los datos nos fueron guardados correctamente',
//         'error'
//     )
// }

// $("#enviar").on('click', () => {
//     let nombre = $("#nombre").val()
//     let apellido = $("#apellido").val()
//     let mail = $("#mail").val()
//     let empresa = $("#dropdown").val()
//     let motivo = $("#motivo").val()
//     let cita = $("#cita").val()
//     let persona = $("#dropdown2").val()
//     const user = {nombre, apellido, mail, empresa, motivo, cita, persona}
//     saveUser(user);
// })

