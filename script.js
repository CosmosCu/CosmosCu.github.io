// script.js
// Inicializar Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDA6WYaC2KWgnEFZAKt9qFEn_8hJOU73H8",
    authDomain: "datachat-94c45.firebaseapp.com",
    databaseURL: "https://datachat-94c45-default-rtdb.firebaseio.com",
    projectId: "datachat-94c45",
    storageBucket: "datachat-94c45.firebasestorage.app",
    messagingSenderId: "203970727939",
    appId: "1:203970727939:web:793893c01a461424afbe36",
    measurementId: "G-PZ5CNWK6ML"
  };

const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Leer datos en tiempo real
const dataContainer = document.getElementById('data-container');
const dataRef = database.ref('data');

dataRef.on('value', (snapshot) => {
    const data = snapshot.val();
    dataContainer.innerHTML = `<p>Datos: ${data}</p>`;
});
