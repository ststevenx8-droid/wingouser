// --- FIREBASE CONFIGURATION & INITIALIZATION ---
const firebaseConfig = {
    apiKey: "AIzaSyAQOxmY1NL-2-NQmtUKgVWgFZ8SaNxlIN4",
    authDomain: "stxwin-82a48.firebaseapp.com",
    databaseURL: "https://stxwin-82a48-default-rtdb.firebaseio.com",
    projectId: "stxwin-82a48",
    storageBucket: "stxwin-82a48.firebasestorage.app"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// Global Database Reference
window.db = firebase.database();
