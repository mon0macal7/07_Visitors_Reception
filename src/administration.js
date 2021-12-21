//Aquí estara el fetch y el export de admin.js
const adminData = [];
const db = firebase.firestore();

const getData = () => db.collection("visitors").get();

window.addEventListener("DOMContentLoaded", async(e) => {
    const querySnapshot = await getData();
    querySnapshot.forEach((doc) => {
        console.log(doc.data().nombre);
        dataAdmin.push(doc.data());
        console.log(dataAdmin);
    });
});

console.log(dataAdmin);
