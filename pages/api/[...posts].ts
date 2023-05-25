import { connectDB } from "@/lib/connectDB";
import PostModel from "@/models/Post";
import { NextApiRequest, NextApiResponse } from "next";
import { Session, getServerSession } from "next-auth";
import authOptions from './auth/[...nextauth]';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const session: Session | null = await getServerSession(req, res, authOptions);
    

    try {
        await connectDB();
        if (req.method == "POST") {
            if (!session || !session.user) {
                return res.status(403).send("You are not signed in!");
            }
            const post_id = req.body['post_id'],
            post_title = req.body['post_title'],
            post_content = req.body['post_content'];
            if (!post_id || !post_title || !post_content) return res.status(400).send("You need to specify a post id, title, and content!");
            const post = await PostModel.findOne({ post_id: post_id });
            if (post) return res.status(400).send("This post already exists!");
            let postCreate = await PostModel.create({
                post_id,
                posted_by: session.user.name,
                post_title,
                post_content,
                post_date_unix: Date.now()
            });
            return res.status(200).json({
                mongo_id: postCreate._id,
                post_id: postCreate.post_id,
                post_title: postCreate.post_title,
                post_content: postCreate.post_content,
                post_date_unix: postCreate.post_date_unix
            });
        } else if (req.method == "GET") {
            if (!req.query['posts'] || !req.query['posts'][1]) return res.status(404).send("Couldn't find that post!");
            const post = await PostModel.findOne({ post_id: req.query['posts'][1] });
            return post ? res.status(200).json({ 
                mongo_id: post._id,
                posted_by: post.posted_by,
                post_id: post.post_id,
                post_title: post.post_title,
                post_content: post.post_content,
                post_date_unix: post.post_date_unix,
            }) : res.status(404).send("Couldn't find that post!");        
        } else if (req.method == "DELETE") {
            if (!session || !session.user) {
                return res.status(403).send("You are not signed in!");
            }
            const post = await PostModel.deleteOne({ post_id: req.query['post_id'] });
            if (!post) return res.status(404).send(`Couldn't find a post by ${req.query['post_id']}`);
            return res.status(200).send(`Successfully deleted ${req.query['post_id']}`)
        }
    } catch (x) {
        return res.status(500).send("There was an error on our end preforming this operation!");
    }
}