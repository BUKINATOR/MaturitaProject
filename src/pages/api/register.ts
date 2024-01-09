import {NextApiRequest, NextApiResponse} from "next";
import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";
import {createUser, createCredentials, getUserByEmail} from "@/firebase/controller";
import {NextResponse} from "next/server";
import {createHash} from "crypto";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const {name, email, password} = req.body;

    if (await getUserByEmail(email)) {
        return NextResponse.json({ error: 'Email existuje' })
    }

    let user = await createUser({
        displayName: name,
        email: email,
    })
    console.log(user)
    let cred = await createCredentials({
        email: email,
        password: createHash("sha256").update(password).digest("hex"),
        userId: user.id,
    })

    res.status(200).json({ message: 'ok' })
}