import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
    return (<div className={"flex flex-col justify-center gap-10 bg-gray-100 dark:bg-black min-h-screen pb-16"}>
    <header className={"flex flex-col h-screen justify-center"}>
            <Image
                src="/images/ICON.png"
                alt="Auxdible's Icon"
                width={200}
                height={200}
                className={"d-block mx-auto"}
            />
            <h1 className={"text-center text-orange-400 font-montserrat text-5xl my-4"}>Not Found</h1>
            <p className={"text-center dark:text-gray-100 text-gray-900 font-montserrat my-1 text-3xl"}>Couldn&apos;t find what you were looking for. Sorry!</p>
            <Link href="/" className={"text-center italic dark:text-gray-100 text-gray-900 font-montserrat text-2xl my-5"}>Back to Home</Link>
        </header>
</div>)
}