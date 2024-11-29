
import { initializeApp, getApp } from "firebase/app";
import { 
    collection, 
    getDoc,
	getDocs,
    getFirestore, 
    updateDoc,
    onSnapshot,
    where,
    query,
    documentId,
    deleteDoc,
    addDoc
} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyCpBoy5nTHa6lmT2Kkq8wN4zKmDcaKRfSU",
  authDomain: "tarefas-dc180.firebaseapp.com",
  projectId: "tarefas-dc180",
  storageBucket: "tarefas-dc180.firebasestorage.app",
  messagingSenderId: "500421552215",
  appId: "1:500421552215:web:bd1c1f815dd04e69969b12",
  measurementId: "G-1DL7B3D3R0"
};


export const app = initializeApp(firebaseConfig);
export const dbFirestore = getFirestore()
export const firestore = {
	addDoc,
	collection,
	deleteDoc,
	documentId,
	getFirestore,
	getDoc,
	getDocs,
	onSnapshot,
	query,
	updateDoc,
	where
}