import {NextApiRequest, NextApiResponse} from "next";
import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";
import {createAd, createDummyAd} from "@/firebase/controller";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    let session = await getServerSession(req, res, authOptions);
    if (!session?.user) {
        res.status(401).json({ message: 'nuhuh' });
        return
    }

    let ad = {
        category: req.body.category,
        location: req.body.location,
        phoneNumber: req.body.phoneNumber,
        salary: req.body.salary,
        section: req.body.section,
        text: req.body.text,
        userId: session.user.id,
    }

    let createdAd = await createAd(ad)

    res.status(200).json({ message: 'ok', id: createdAd.id })
}