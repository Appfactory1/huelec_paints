import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const config = {
    apiKey: "AIzaSyDP_OtZ2fbetjvHlJCapVnxtFVwjgHgF1M",
    authDomain: "heulecpaints.firebaseapp.com",
    databaseURL: "https://heulecpaints.firebaseio.com",
    projectId: "heulecpaints",
    storageBucket: "heulecpaints.appspot.com",
    messagingSenderId: "779263628035",
    appId: "1:779263628035:web:90abb2624acf2d29200f36",
    measurementId: "G-XZXFQSXV3V"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

export default firebase;