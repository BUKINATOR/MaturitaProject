import {NextApiRequest, NextApiResponse} from "next";
import {createUser, createCredentials, getUserByEmail} from "@/firebase/controller";
import {NextResponse} from "next/server";
import {createHash} from "crypto";
import {doc} from "@firebase/firestore";
import {firestore} from "@/firebase/controller";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const {name, email, password} = req.body;

    if (await getUserByEmail(email)) {
        return NextResponse.json({error: 'Email existuje'})
    }

    let user = await createUser({
        displayName: name,
        email: email,
    })

    if (!user || !user.id) {
        return NextResponse.json({error: 'Chyba při vytváření uživatele'})
    }

    let userRef = doc(firestore, "users", user.id);

    console.log(user)
    let cred = await createCredentials({
        email: email,
        password: createHash("sha256").update(password).digest("hex"),
        userId: user.id || "",
        user: userRef,
    });

    res.status(200).json({message: 'ok'})
}
