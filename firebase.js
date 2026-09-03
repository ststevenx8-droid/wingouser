// --- FIREBASE CONFIGURATION & INITIALIZATION ---
const firebaseConfig = {
    apiKey: "AIzaSyBncaOFVPMcr23GFl3Wx0O-0rI7ALKxmBg",
    authDomain: "stxwin-eade6.firebaseapp.com",
    databaseURL: "https://stxwin-eade6-default-rtdb.firebaseio.com",
    projectId: "stxwin-eade6",
    storageBucket: "stxwin-eade6.firebasestorage.app"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// Global Database Reference
window.db = firebase.database();
