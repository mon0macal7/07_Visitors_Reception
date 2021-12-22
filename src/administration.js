import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_RAUTHDOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_RDATABASEURL,
  projectId:process.env.REACT_APP_FIREBASE_RPROJECTID ,
  storageBucket: process.env.REACT_APP_FIREBASE_RSTORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_RMESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_RAPPID,
  measurementId: process.env.REACT_APP_FIREBASE_RMEASUREMENTID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export default db;


    const saveUser = (user) => {
    import { collection, addDoc } from "firebase/firestore";

try {
    const docRef = await addDoc(collection(db, "usuarios"), {
    user
    });
    mensaje();
} catch (e) {
    mensajeError();
}
    }

const mensaje = () => {
    Swal.fire(
        'Good job!',
        'You clicked the button!',
        'success'
    )
}

const mensajeError = () => {
    Swal.fire(
        'Upss!',
        'Los datos nos fueron guardados correctamente',
        'error'
    )
}

$("#enviar").on('click', () => {
    let nombre = $("#nombre").val()
    let apellido = $("#apellido").val()
    let mail = $("#mail").val()
    let empresa = $("#dropdown").val()
    let motivo = $("#motivo").val()
    let cita = $("#cita").val()
    let persona = $("#dropdown2").val()
    const user = {nombre, apellido, mail, empresa, motivo, cita, persona}
    saveUser(user);
})
