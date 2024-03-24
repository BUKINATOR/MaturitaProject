import {DocumentData, DocumentReference} from "@firebase/firestore";

export interface Credentials {
    id?: string;
    email: string;
    password: string;
    userId: string;
    user: DocumentReference;
}