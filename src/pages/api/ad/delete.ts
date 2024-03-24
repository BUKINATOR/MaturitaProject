import {NextApiRequest, NextApiResponse} from "next";
import {getServerSession, SessionStrategy} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";
import {getAdByID, deleteAd} from "@/firebase/controller";

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
        res.status(401).json({message: 'nuhuh'});
        return
    }

    let id = req.body.id;

    let targetedAd = await getAdByID(id);

    if (session.user.id != targetedAd.userId) {
        res.status(403).json({message: 'nuhuh'})
        return
    }

    await deleteAd(id)

    res.status(200).json({message: 'ok'})
}