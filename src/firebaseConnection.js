import firebase from "firebase/app";
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDx0-HLjc9iMY274DwyaG2CTNWupNdvSSA",
  authDomain: "meuapp-f15c8.firebaseapp.com",
  databaseURL: "https://meuapp-f15c8-default-rtdb.firebaseio.com",
  projectId: "meuapp-f15c8",
  storageBucket: "meuapp-f15c8.appspot.com",
  messagingSenderId: "438321657674",
  appId: "1:438321657674:web:7eda0f94ece53b3cfaf3b3",
  measurementId: "G-FJX3GED5RD"
};

if(!firebase.apps.length) {
  // Abrir minha conexão
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
  


