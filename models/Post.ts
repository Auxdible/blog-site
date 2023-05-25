import mongoose from "mongoose";
import UserModel from "./User";

export interface IPost {
    post_id: string;
    posted_by: string;
    post_title: string;
    post_date_unix: number;
    post_content: string;
}

export const PostSchema = new mongoose.Schema<IPost>({
    post_id: { type: String, required: true, unique: true },
    post_content: { type: String, required: true },
    post_date_unix: { type: Number, required: true, default: Date.now() },
    post_title: { type: String, required: true },
    posted_by: { type: String, required: true}
});

const PostModel = mongoose.models.Post || mongoose.model('Post', PostSchema);
export default PostModel;