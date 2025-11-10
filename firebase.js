// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getDatabase, ref, push, set, onValue, update } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyA2JDGYzXPl8DxRwL2ER-418wLUerkqnPY",
    authDomain: "dp-251.firebaseapp.com",
    databaseURL: "https://dp-251-default-rtdb.firebaseio.com",
    projectId: "dp-251",
    storageBucket: "dp-251.firebasestorage.app",
    messagingSenderId: "52827715825",
    appId: "1:52827715825:web:141832ebb899519c20d150",
    measurementId: "G-7TZ2RZ2N5P"
  };

export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export { ref, push, set, onValue, update };
