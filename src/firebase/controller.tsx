import {getFirestore, collection, addDoc, getDocs, query, where, getDoc, doc, deleteDoc} from "@firebase/firestore";
import {app} from './firebase';
import Ad from "@/types/Ad";
import User from "@/types/User";
import Credentials from "@/types/Credentials";


const firestore = getFirestore(app);
const collectionAds = collection(firestore, 'ads');
const collectionUsers = collection(firestore, 'users');
const collectionCredentials = collection(firestore, "credentials")

export async function getAllAds(): Ad[] {
    let list = []
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
        list.push(a)
    })
    return list
}

export async function getAllAdsOfUser(userid): Ad[] {
    let list = []
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
        list.push(a)
    })
    return list
}

export async function getAdByID(id): Ad {
    let docRef = doc(firestore, "ads", id);
    let snap = await getDoc(docRef)
    let data = snap.data()
    let ad = {
        id: snap.id,
        category: data.category,
        location: data.location,
        phoneNumber: data.phoneNumber,
        salary: data.salary,
        section: data.section,
        text: data.text,
        userId: data.user.id,
    }
    return ad;
}

export async function _getAllUsers(): User[] {
    let list = []
    let snap = await getDocs(collectionUsers)
    snap.forEach(user => {
        list.push(
            {
                id: user.id,
                ...user.data()
            }
        )
    })
    return list
}

export async function getUserByID(id): User {
    let docRef = doc(firestore, "users", id);
    let snap = await getDoc(docRef)

    return {...snap.data(), id: snap.id}
}

export async function getCredentials(email, passwordHash): Credentials {
    let snap = await getDocs(query(collectionCredentials, where("email", "==", email), where("password", "==", passwordHash)));
    let cred = []
    snap.forEach((c) => {
        let data = c.data()
        let a = {
            id: c.id,
            email: data.email,
            password: data.password,
            userId: data.user.id
        }
        cred.push(a)
    });
    console.assert(cred.length <= 1)
    return cred.length > 0 ? cred[0] : null
}

export async function deleteAd(id) {
    await deleteDoc(doc(firestore, "ads", id));
}

export async function createAd(ad: Ad): Ad {
    ad = {
        category: ad.category,
        location: ad.location,
        phoneNumber: ad.phoneNumber,
        salary: ad.salary,
        section: ad.section,
        text: ad.text,
        user: doc(firestore, "users", ad.userId),
    }

    let docRef = await addDoc(collectionAds, ad);

    let snap = await getDoc(docRef)
    let data = snap.data()
    let addata = {
        id: snap.id,
        category: data.category,
        location: data.location,
        phoneNumber: data.phoneNumber,
        salary: data.salary,
        section: data.section,
        text: data.text,
        userId: data.user.id,
    }
    return addata;
}

export async function createCredentials(cred: Credentials): Credentials {
    cred = {
        email: cred.email,
        password: cred.password,
        user: doc(firestore, "users", cred.userId),
    }

    let docRef = await addDoc(collectionCredentials, cred);

    let snap = await getDoc(docRef)
    let data = snap.data()
    let creddata = {
        id: snap.id,
        email: data.email,
        password: data.password,
        userId: data.user.id,
    }
    return creddata;
}

export async function createUser(user: User): User {
    user = {
        displayName: user.displayName,
        email: user.email,
    }

    let docRef = await addDoc(collectionUsers, user);

    let snap = await getDoc(docRef)
    let data = snap.data()
    let userdata = {
        id: snap.id,
        displayName: data.displayName,
        email: data.email,
    }
    return userdata;
}

export async function getUserByEmail(email) {
    let snap = await getDocs(query(collectionUsers, where("email", "==", email)));
    let user = []
    snap.forEach((c) => {
        let data = c.data()
        let a = {
            id: c.id,
            email: data.email,
            password: data.password,
            userId: data.user.id
        }
        user.push(a)
    });
    console.assert(user.length <= 1)
    return user.length > 0 ? user[0] : null
}