import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './Fontawesome';
import * as firebase from 'firebase';
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC2ke7vECA2FozQM59-2_yD2H6KbQXjBrI",
  authDomain: "ipodjs-b78ce.firebaseapp.com",
  databaseURL: "https://ipodjs-b78ce.firebaseio.com",
  projectId: "ipodjs-b78ce",
  storageBucket: "ipodjs-b78ce.appspot.com",
  messagingSenderId: "463808182336",
  appId: "1:463808182336:web:49571bf1d7d23a7ba007a5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

