import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCTVOIQ8IEypiQGiRrcgA1Xwp5Iw80oQtg",
    authDomain: "react-app-cursos-ba961.firebaseapp.com",
    projectId: "react-app-cursos-ba961",
    storageBucket: "react-app-cursos-ba961.appspot.com",
    messagingSenderId: "324893881",
    appId: "1:324893881:web:34982181b744e50a582f68"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {
      db,
      googleAuthProvider,
      firebase
  };