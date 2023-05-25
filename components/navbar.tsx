import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    const { data: session, status } = useSession();
    return (
        <nav className={"navbar"}>
            <Link href="/" className={"group hover:translate-y-1 transition-all"}>
                <span className={"text-2xl font-montserrat group-hover:text-orange-400 transition-all duration-200"}>Home</span>
            </Link>
            <Link href="/blog" className={"group hover:translate-y-1 transition-all"}>
                <span className={"text-2xl font-montserrat group-hover:text-orange-400 transition-all duration-200"}>Blog</span>
            </Link>
            {status == "authenticated" ? 
            <Link href="/" onClick={() => signOut()} className={"group hover:translate-y-1 transition-all"}>
                <span className={"text-2xl font-montserrat group-hover:text-orange-400 transition-all duration-200"}>Sign Out</span>
            </Link> : status == "loading" ?
            <span className={"group hover:translate-y-1 transition-all"}>
                <span className={"text-2xl font-montserrat group-hover:text-orange-400 transition-all duration-200"}>Sign Out</span>
            </span>
            :
            <Link href="/api/auth/signin" className={"group hover:translate-y-1 transition-all"}>
                <span className={"text-2xl font-montserrat group-hover:text-orange-400 transition-all duration-200"}>Sign In</span>
            </Link>}
        </nav>
    )
}