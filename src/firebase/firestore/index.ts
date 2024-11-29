import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { firestore } from "..";

export const db = firestore.getFirestore()

export function addDocument(collectionName: string, data: any) {
    return addDoc(collection(db, collectionName), data ) 
}

export function setDocument(
	collectionName: string,
	document: string,
	data: any,
	isUpdate: boolean = false
) {
	if (isUpdate) {
		return setDoc(doc(db, collectionName, document), data, { merge: isUpdate })
	} else {
		return setDoc(doc(db, collectionName, document), data)
	}
}