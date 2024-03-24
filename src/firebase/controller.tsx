import {getFirestore, collection, addDoc, getDocs, query, where, getDoc, doc, deleteDoc} from "@firebase/firestore";
import {app} from './firebase';
import Ad from "@/types/Ad";
import {User} from "@/types/User";
import {Credentials} from "@/types/Credentials";

export const firestore = getFirestore(app);

const collectionAds = collection(firestore, 'ads');
const collectionUsers = collection(firestore, 'users');
const collectionCredentials = collection(firestore, "credentials")

export async function getAllAds(): Promise<Ad[]> {
    let list: Ad[] = []
    let snap = await getDocs(collectionAds)
    snap.forEach(ad => {
        let data = ad.data()
        let a = {
            id: ad.id,
            category: data.category,
            location: data.location,
            phoneNumber: data.phoneNumber,
            salary: data.salary,
            section: data.section,
            text: data.text,
            userId: data.user.id,
        }
        list.push(a as Ad)
    })
    return list
}

export async function getAllAdsOfUser(userid: string): Promise<Ad[]> {
    let list: Ad[] = []
    let snap = await getDocs(query(collectionAds, where("user", "==", doc(firestore, "users", userid))))
    snap.forEach(ad => {
        let data = ad.data()
        let a = {
            id: ad.id,
            category: data.category,
            location: data.location,
            phoneNumber: data.phoneNumber,
            salary: data.salary,
            section: data.section,
            text: data.text,
            userId: data.user.id,
        }
        list.push(a as Ad)
    })
    return list
}

export async function getAdByID(id: string): Promise<Ad> {
    let docRef = doc(firestore, "ads", id);
    let snap = await getDoc(docRef)
    let data = snap.data()
    if (data) {
        let ad = {
            id: snap.id,
            category: data.category,
            location: data.location,
            phoneNumber: data.phoneNumber,
            salary: data.salary,
            section: data.section,
            text: data.text,
            userId: data.user.id,
            user: doc(firestore, "users", data.user.id),  // Add this line
        }
        return ad;
    } else {
        throw new Error('Document does not exist');
    }
}

export async function _getAllUsers(): Promise<User[]> {
    let list: User[] = []
    let snap = await getDocs(collectionUsers)
    snap.forEach(user => {
        const userData = user.data();
        list.push(
            {
                id: user.id,
                displayName: userData.displayName,
                email: userData.email
            }
        )
    })
    return list
}

export async function getUserByID(id: string): Promise<User> {
    let docRef = doc(firestore, "users", id);
    let snap = await getDoc(docRef)
    const data = snap.data();
    if (data) {
        return {
            id: snap.id,
            displayName: data.displayName,
            email: data.email
        }
    } else {
        throw new Error('Document does not exist');
    }
}

export async function getCredentials(email: string, passwordHash: string): Promise<Credentials | null> {
    let snap = await getDocs(query(collectionCredentials, where("email", "==", email), where("password", "==", passwordHash)));
    let cred: Credentials[] = [];
    snap.forEach((c) => {
        let data = c.data()
        let a = {
            id: c.id,
            email: data.email,
            password: data.password,
            userId: data.user.id,
            user: doc(firestore, "users", data.user.id) // Add this line
        }
        cred.push(a)
    });
    console.assert(cred.length <= 1)
    return cred.length > 0 ? cred[0] : null
}

export async function deleteAd(id: string) {
    await deleteDoc(doc(firestore, "ads", id));
}

export async function createAd(ad: Ad): Promise<Ad> {
    if (ad.userId === null) {
        throw new Error('userId is null');
    }

    const newAd = {
        category: ad.category,
        location: ad.location,
        phoneNumber: ad.phoneNumber,
        salary: ad.salary,
        section: ad.section,
        text: ad.text,
        user: doc(firestore, "users", ad.userId),
    }

    let docRef = await addDoc(collectionAds, newAd);

    let snap = await getDoc(docRef)
    let data = snap.data()
    if (data) {
        let addata = {
            id: snap.id,
            category: data.category,
            location: data.location,
            phoneNumber: data.phoneNumber,
            salary: data.salary,
            section: data.section,
            text: data.text,
            userId: data.user.id,
            user: doc(firestore, "users", data.user.id),  // Add this line
        }
        return addata;
    } else {
        throw new Error('Document does not exist');
    }
}

export async function createCredentials(cred: Credentials): Promise<Credentials> {
    cred = {
        email: cred.email,
        password: cred.password,
        userId: cred.userId,
        user: doc(firestore, "users", cred.userId),
    }

    let docRef = await addDoc(collectionCredentials, cred);

    let snap = await getDoc(docRef)
    let data = snap.data()
    if (data) {
        let creddata = {
            id: snap.id,
            email: data.email,
            password: data.password,
            userId: data.user.id,
            user: doc(firestore, "users", data.user.id), // Add this line
        }
        return creddata;
    } else {
        throw new Error('Document does not exist');
    }
}

export async function createUser(user: User): Promise<User | undefined> {
    const newUser = {
        displayName: user.displayName,
        email: user.email,
    }

    let docRef = await addDoc(collectionUsers, newUser);

    let snap = await getDoc(docRef)
    let data = snap.data()
    if (data) {
        let userdata = {
            id: snap.id, // Add this line
            displayName: data.displayName,
            email: data.email,
        }
        return userdata;
    }
}

export async function getUserByEmail(email: string) {
    let snap = await getDocs(query(collectionUsers, where("email", "==", email)));
    let user: User[] = [];
    snap.forEach((c) => {
        let data = c.data()
        let a: User = {
            id: c.id,
            displayName: data.displayName, // Add this line
            email: data.email,
        }
        user.push(a)
    });
    console.assert(user.length <= 1)
    return user.length > 0 ? user[0] : null
}