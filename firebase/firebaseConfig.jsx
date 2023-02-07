import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA9zUlsSfRC_kWqzsqZaHABgjD_EQXBtlM",
  authDomain: "leapsy-8e851.firebaseapp.com",
  projectId: "leapsy-8e851",
  storageBucket: "leapsy-8e851.appspot.com",
  messagingSenderId: "455387590601",
  appId: "1:455387590601:web:7c69c9fef7e0b678dd8218",
  measurementId: "G-XV1JP31G0R",
};

const app = initializeApp(firebaseConfig);
export const db = getStorage(app);
