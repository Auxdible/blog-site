import { connectDB } from '@/lib/connectDB';
import UserModel from '@/models/User';
import * as bcrypt from 'bcrypt';
import NextAuth, { User } from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jdoe" },
                password: { label: "Password", type: "password" },
                
            },
            async authorize(credentials) {
                try {
                    await connectDB();
                    let user = await UserModel.findOne({ username: credentials?.username||"" });
                    if (user && (bcrypt.compareSync(credentials?.password||"", user.password) || credentials?.password == user.password)) {
                        
                        return <User>{ id: user._id.toString(), name: user.username };
                    } else {
                        return null;
                        
                    }
                } catch (x) {
                    return null;
                }
            }
        })
    ],
    pages: {
        signIn: "/auth/signin",
        error: "/auth/error",
        signOut: "/auth/signout"
    }
});