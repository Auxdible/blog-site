import mongoose from "mongoose";

export interface IUser {
    username: string;
    password: string;
}

export const UserSchema = new mongoose.Schema<IUser>({
    username: { type: String },
    password: { type: String },
});

const UserModel = mongoose.models['User'] || mongoose.model('User', UserSchema);
export default UserModel;