import {getFirestore, collection, addDoc} from "@firebase/firestore";
import {app} from './firebase';
import {AddInzeratType} from "@/types/ad";


const firestore = getFirestore(app);

//COLLECTION

export const InzeratySeznamCollection = collection(firestore, 'InzeratySeznam');

//NEW COLLECTION
export const addAd = async (data: AddInzeratType) => {
    const newinzerat = await addDoc(InzeratySeznamCollection, data)
    console.log(`Tvůj inzerát se zobrazil všem na ${newinzerat.path}`)
}