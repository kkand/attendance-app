import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBdTpIcSfuuFvKMzXkO1Bg-c-Saak5IphM",
  authDomain: "attendance-app-fc8ce.firebaseapp.com",
  projectId: "attendance-app-fc8ce",
  storageBucket: "attendance-app-fc8ce.firebasestorage.app",
  messagingSenderId: "320698802923",
  appId: "1:320698802923:web:19069f4dd6afa5ed5a14ae"
};

// Firebaseを初期化
const app = initializeApp(firebaseConfig);

// 認証とFirestoreのサービスを取得
export const auth = getAuth(app);
export const db = getFirestore(app);
