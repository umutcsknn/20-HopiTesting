// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import {
  getAuth,
  initializeAuth,
  // @ts-ignore
  getReactNativePersistence,
} from "firebase/auth";

import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyBhzaonFFQWql82RYA_Kkz8DhSkCwbP_aY",
  authDomain: "fir-101-67bf3.firebaseapp.com",
  projectId: "fir-database-51bc8",
  storageBucket: "fir-database-51bc8.appspot.com",
  messagingSenderId: "252818381987",
  appId: "1:252818381987:web:1676dc60140f8190b17316"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});