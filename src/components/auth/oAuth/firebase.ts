// firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAT3O3KKLJeoZzhnAwCCt9kFGPt7HHw5Nc",
  authDomain: "for-cat-shop.firebaseapp.com",
  projectId: "for-cat-shop",
  storageBucket: "for-cat-shop.appspot.com",
  messagingSenderId: "410983676433",
  appId: "1:410983676433:web:c31814d6aba6225e998fb0",
  measurementId: "G-6XK9R77C1Q"
};

let app;
if (typeof window !== "undefined") {
  app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
}

export { app };
