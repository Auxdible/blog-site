import PostManageBar from "@/components/post-manage-bar";
import { getLatestPosts } from "@/lib/posts";
import { IPost } from "@/models/Post";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function Home({ posts }: { posts: IPost[] }) {
    const {data: session, status} = useSession();
    return (
    <div className={"flex flex-col justify-center gap-10 bg-gray-100 dark:bg-black pb-16"}>
        <header className={"flex flex-col h-screen justify-center"}>
            <Image
                src="/images/ICON.png"
                alt="Auxdible's Icon"
                width={200}
                height={200}
                className={"d-block mx-auto"}
            />
            <h1 className={"text-center text-orange-400 font-montserrat text-5xl my-4"}>Auxdible</h1>
            <p className={"text-center dark:text-gray-100 text-gray-900 font-montserrat my-1 text-3xl"}>Full Stack Developer</p>
            <p className={"text-center dark:text-gray-100 text-gray-900 font-montserrat text-3xl"}>Coffee Addict</p>
        </header>
        {session ? <PostManageBar/> : <></>}
        <div className={"flex mx-auto flex-col rounded-lg dark:border-orange-300 border-orange-600 border p-2 w-3/4"}>
            <h1 className={"text-center text-orange-400 font-montserrat text-3xl my-4"}>Latest Posts</h1>
            <ul>
                { posts.map((post) =>
                    <li key={post.post_id} className={"text-white w-fit mx-auto rounded-lg dark:border-gray-300 border-gray-900 border px-3 my-4 hover:px-5 transition-all"}>
                        <Link href={`/posts/${post.post_id}`}>
                            <div className={"my-4"}>
                                <h1 className={"text-center text-orange-400 font-roboto text-2xl mb-1"}>{post.post_title}</h1>
                                <p className={"text-center dark:text-gray-100 text-gray-900 font-roboto text-xl"}>By {post.posted_by} • {new Date(post.post_date_unix).toISOString().split('T')[0]}</p>
                            </div>
                        </Link>
                    </li>) }
            </ul>
            
        </div>
    </div>
    );
}
export async function getServerSideProps() {
    const posts = await getLatestPosts(10);

    return {
        props: {
            posts: posts
        }
    };
}