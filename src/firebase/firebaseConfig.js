import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDgM4SSa1uQ1tBsgpIAHPx2_WiMHG5RbMA",
  authDomain: "audiophile-604b8.firebaseapp.com",
  projectId: "audiophile-604b8",
  storageBucket: "audiophile-604b8.appspot.com",
  messagingSenderId: "477844049256",
  appId: "1:477844049256:web:b49af6d81bbab528541add",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)