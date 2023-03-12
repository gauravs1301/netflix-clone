import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDaJuMVll-APSvZg-qisvo2wVLl4GK6pmA",
    authDomain: "netflix-clone-50172.firebaseapp.com",
    projectId: "netflix-clone-50172",
    storageBucket: "netflix-clone-50172.appspot.com",
    messagingSenderId: "873928749056",
    appId: "1:873928749056:web:e6cbba5e7e95e7a37128e5"
  };

 const firebaseApp=firebase.initializeApp(firebaseConfig);
 const db=firebase.firestore();
 const auth=firebase.auth();

 export {auth};
 export default db;