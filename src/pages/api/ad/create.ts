import {NextApiRequest, NextApiResponse} from "next";
import {getServerSession, SessionStrategy} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";
import {createAd} from "@/firebase/controller";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    let sessionOptions = {
        ...authOptions,
        session: {
            ...authOptions.session,
            strategy: authOptions.session.strategy as SessionStrategy,
        },
    };

    let session = await getServerSession(req, res, sessionOptions);

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
        user: session.user,
        id: Date.now().toString(),
    }

    let createdAd = await createAd(ad)

    res.status(200).json({ message: 'ok', id: createdAd.id })
}