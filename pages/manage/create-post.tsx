import { useSession } from "next-auth/react";
import { ChangeEvent, useState } from "react";
import axios from 'axios';
import { useRouter } from "next/router";

export default function CreatePost() {
    const { data: session, status} = useSession();
    const DEFAULT_FORM = { post_id: "", post_title: "", post_content: "# Markdown goes here!" };
    const [form, setForm] = useState(DEFAULT_FORM);
    const router = useRouter();
    function handleChange({target}: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        if (target.name == "post_id") setForm({ ...form, post_id: target.value });
        if (target.name == "post_title") setForm({ ...form, post_title: target.value });
        if (target.name == "post_content") setForm({ ...form, post_content: target.value });
    }
    function handleSubmit() {
        axios.post(`/api/posts`, form, { withCredentials: true });
        router.push('/');
    }
    return (
        <div className={"flex flex-col justify-center gap-10 bg-gray-100 dark:bg-black min-h-screen pb-16"}>
        { status == "authenticated" ? <><h1 className={"text-center text-orange-400 font-montserrat text-4xl my-4"}>Create Post</h1>
        <div className={"flex mx-auto flex-col rounded-lg dark:border-orange-300 border-orange-600 border p-2 lg:w-1/2 w-3/4"}>
            <div className={"flex flex-col form-orange-400"}>
            <label className={"dark:text-gray-100 light:text-gray-800 font-roboto text-xl"}>Post ID: <input onChange={(e) => handleChange(e)} value={form.post_id} className={"dark:bg-transparent border border-orange-400 rounded-lg text-lg"} type="text" pattern="[a-zA-Z0-9]{1,}" name="post_id"/></label>
                <label className={"dark:text-gray-100 light:text-gray-800 font-roboto text-xl"}>Post Title: <input onChange={(e) => handleChange(e)} value={form.post_title} className={"dark:bg-transparent border border-orange-400 rounded-lg text-lg"} type="text" name="post_title"/></label>
                <p className={"text-orange-400 font-roboto text-2xl my-2"}>Post Content (Markdown Supported)</p>
                <textarea onChange={(e) => handleChange(e)} value={form.post_content} className={"dark:bg-transparent border border-orange-400 rounded-lg text-lg dark:text-gray-100 light:text-gray-800 font-roboto"}  name="post_content">
                </textarea>
                <button onClick={() => handleSubmit()} className={"mx-auto my-5 w-fit px-3 py-1 dark:bg-transparent border border-orange-400 rounded-lg text-lg transition-colors duration-200 hover:text-orange-400 hover:dark:border-gray-100 hover:border-gray-800 dark:text-gray-100 text-gray-800 font-roboto"}>Submit</button>
            </div>
            
        </div></> : status == "loading" ? <h1 className={"text-center text-orange-400 font-montserrat text-4xl my-4"}>Loading...</h1> : <h1 className={"text-center text-orange-400 font-montserrat text-4xl my-4"}>You are not signed in!</h1>
        }
        
        </div>
    )
}