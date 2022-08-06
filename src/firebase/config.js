import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyD7_RRIiTH4mKpCxQXm4_TYr-_cMW-ewFk",
    authDomain: "fir-10099.firebaseapp.com",
    projectId: "fir-10099",
    storageBucket: "fir-10099.appspot.com",
    messagingSenderId: "330463295811",
    appId: "1:330463295811:web:5168dadbf861918e8c97f6"
  };

 export default firebase.initializeApp(firebaseConfig)