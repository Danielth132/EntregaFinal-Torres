// traigo una funcion que me conecta la app de react (codigo del front end ) con la plataforma de firebase
import { initializeApp } from "firebase/app";
//traigo una funcion que me conecta con el servicio  de base de datos de firestore
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXo6DCZfPvMLFJMC9jYzWxNopl22LftMo",
  authDomain: "carrito-react-5addc.firebaseapp.com",
  projectId: "carrito-react-5addc",
  storageBucket: "carrito-react-5addc.appspot.com",
  messagingSenderId: "254254226845",
  appId: "1:254254226845:web:379d691f5f496e6c2a6374"
};

// esta es una variable que representa la plataforma en si
const app = initializeApp(firebaseConfig);
//esta es una variable que representa la pestaña firestoore database
export const db = getFirestore(app)
//la variable se debe exportar