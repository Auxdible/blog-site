import PostContent from "@/components/post-content";
import { getPost } from "@/lib/posts";
import { IPost } from "@/models/Post";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";


export default function Post({ post }: { post?: IPost }) {
    return ( <div className={"flex flex-col justify-center gap-10 bg-gray-100 dark:bg-black min-h-screen pb-16"}>
        <Head>
            <title>{post?.post_title || "Not Found"}</title>
        </Head>
        {post ? <>
        <header className="flex flex-col w-screen justify-center mb-12 h-96">
            <h1 className={"d-block text-center text-orange-400 font-montserrat text-4xl my-4"}>{post.post_title}</h1>
            <p className={"d-block text-center dark:text-gray-100 text-gray-900 font-montserrat text-2xl"}>By {post.posted_by} • {new Date(post.post_date_unix).toISOString().split('T')[0]}</p>
        </header>
        <div className={"markdown w-full mx-auto rounded-lg border p-4"} dangerouslySetInnerHTML={{__html: post.post_content}}>
        </div>
        </>
            : <h1 className={"text-center text-orange-400 font-montserrat text-4xl my-4"}>Couldn&apos;t find that post.</h1>}
        
    </div>
    );
}
export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    console.log(context.params);
  if (!context.params) return { props: {} };
  const postId = context.params['post_id'];
  if (postId) {
    const post = await getPost(postId.toString());
    console.log(post);
    if (post) {
        
        return {
            props: {
                post
            }
        }; 
    } else {
        return { props: {}};
    }
    
  } else {
    return { props: {} }; 
  }
}
