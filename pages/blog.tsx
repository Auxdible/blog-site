import { getLatestPosts } from "@/lib/posts";
import { IPost } from "@/models/Post";
import Link from "next/link";

export default function Blog({ posts }: { posts: IPost[] }) {
    return (<div className={"flex flex-col justify-center gap-10 bg-gray-100 dark:bg-black min-h-screen pb-16"}>
        <h1 className={"text-center text-orange-400 font-montserrat text-4xl my-4"}>All Blog Posts</h1>
        <div className={"flex mx-auto flex-col rounded-lg dark:border-orange-300 border-orange-600 border p-2 w-3/4"}>
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
    </div>);
}

export async function getServerSideProps() {
    const posts = await getLatestPosts(undefined);
    return {
        props: {
            posts: posts
        }
    };
}
