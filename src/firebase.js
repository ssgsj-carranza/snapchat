import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBKaNDyhFv5eG7cAPidilpzsL1_9QBEK9s",
    authDomain: "snapchat-clone-6eb91.firebaseapp.com",
    projectId: "snapchat-clone-6eb91",
    storageBucket: "snapchat-clone-6eb91.appspot.com",
    messagingSenderId: "1097091555571",
    appId: "1:1097091555571:web:ddf586cac8af74d0c6d786"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db, auth, storage, provider};