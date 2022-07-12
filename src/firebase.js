import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCgl2289t3kX0NcduuCTB8g6J9JOuOUnvA",
    authDomain: "clone-3659d.firebaseapp.com",
    projectId: "clone-3659d",
    storageBucket: "clone-3659d.appspot.com",
    messagingSenderId: "760046060798",
    appId: "1:760046060798:web:3cecef961e5dda811d11af"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };