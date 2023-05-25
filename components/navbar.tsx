import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import ThemeButton from "./ThemeButton";

export default function Navbar() {
    const { data: session, status } = useSession();
    return (
        <nav className={"navbar"}>
            <ul className={"flex flex-row gap-10 h-10"}>
                <li className={"flex-1 text-center"}>
                <Link href="/" className={"group w-full block hover:translate-y-1 transition-all"}>
                    <span className={"text-2xl w-full block font-montserrat group-hover:text-orange-400 transition-all duration-200"}>Home</span>
                </Link>
                </li>
                <li className={"flex-1 text-center"}>
                <Link href="/blog" className={"group w-full block hover:translate-y-1 transition-all"}>
                    <span className={"text-2xl w-full block font-montserrat group-hover:text-orange-400 transition-all duration-200"}>Blog</span>
                </Link>
                </li>
                <li className={"flex-1 text-center"}>
                {status == "authenticated" ? 
            <Link href="/" onClick={() => signOut()} className={"group w-full block hover:translate-y-1 transition-all"}>
                <span className={"text-2xl w-full block font-montserrat group-hover:text-orange-400 transition-all duration-200"}>Logout</span>
            </Link> : status == "loading" ?
            <span className={"group w-full block hover:translate-y-1 transition-all"}>
                <span className={"text-2xl w-full block font-montserrat group-hover:text-orange-400 transition-all duration-200"}>Logout</span>
            </span>
            :
            <Link href="/api/auth/signin" className={"group w-full block hover:translate-y-1 transition-all"}>
                <span className={"text-2xl w-full block font-montserrat group-hover:text-orange-400 transition-all duration-200"}>Login</span>
            </Link>}
                </li>
            </ul>
            <ThemeButton/>
        </nav>
    )
}