import firebase from 'firebase/app';
import 'firebase/storage';

var firebaseConfig = {
  apiKey: "AIzaSyDWFJLCPqxgs-lumBw7izYmWfORw0xyNvw",
  authDomain: "rgoonie-website.firebaseapp.com",
  databaseURL: "https://rgoonie-website.firebaseio.com",
  projectId: "rgoonie-website",
  storageBucket: "rgoonie-website.appspot.com",
  messagingSenderId: "805503887203",
  appId: "1:805503887203:web:8d2e199a6217e9c7885556",
  measurementId: "G-QE1EJ724VG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const storage = firebaseApp.storage()

export { storage, firebaseApp as Firebase }