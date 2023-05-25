import PostModel from "@/models/Post";
import { connectDB } from "./connectDB";
import Showdown from "showdown";

const converter = new Showdown.Converter({
    noHeaderId: true,
    ghCodeBlocks: true,
    parseImgDimensions: true,
    emoji: true
});
export async function getLatestPosts(limit: number|undefined) {
    await connectDB();
    try {
        let posts = await PostModel.find({}, {}, { limit });
        return posts.map((post) => ({
            post_id: post.post_id,
            posted_by: post.posted_by,
            post_title: post.post_title,
            post_content: post.post_content,
            post_date_unix: post.post_date_unix
        }));
    } catch (x) {
        return [];
    }
}
export async function getPost(post_id: string) {
    await connectDB();
    try {
        let post = await PostModel.findOne({ post_id });
        return post ? {
            post_id: post.post_id,
            post_title: post.post_title,
            posted_by: post.posted_by,
            post_date_unix: post.post_date_unix,
            post_content: converter.makeHtml(post.post_content)
        } : undefined;
    } catch (x) {
        console.log(x);
        return null;
    }
}