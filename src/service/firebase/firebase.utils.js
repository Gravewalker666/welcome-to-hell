import firebase from "firebase/app";
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDxTpXGitwwTevi9uzZ3JGefveNcIvH8zU",
    authDomain: "test-447c1.firebaseapp.com",
    databaseURL: "https://test-447c1.firebaseio.com",
    projectId: "test-447c1",
    storageBucket: "test-447c1.appspot.com",
    messagingSenderId: "1006176247582",
    appId: "1:1006176247582:web:c3bccfa8081ab35238330f",
    measurementId: "G-5268MDD44Q"
}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.app().auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
