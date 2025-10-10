// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC7DfzX7bVZONm-zZuqZCE81y1wfmTeZNI',
  authDomain: 'studylog-12756.firebaseapp.com',
  projectId: 'studylog-12756',
  storageBucket: 'studylog-12756.firebasestorage.app',
  messagingSenderId: '576619265367',
  appId: '1:576619265367:web:9fefbe4d556d548b741212',
  measurementId: 'G-M4TZCBR3VQ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
