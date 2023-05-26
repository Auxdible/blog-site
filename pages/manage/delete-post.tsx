import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

import { ChangeEvent, useState } from "react";

export default function DeletePost() {
    const { data: session, status} = useSession();
    const [form, setForm] = useState({ post_id: "" });
    const router = useRouter();
    function handleChange({target}: ChangeEvent<HTMLInputElement>) {
        if (target.name == "post_id") setForm({ post_id: target.value });
    }
    async function handleSubmit() {
        axios.delete(`/api/posts?post_id=${form.post_id}`, { withCredentials: true })
        router.push('/');
    }
    return (
        <div className={"flex flex-col justify-center gap-10 bg-gray-100 dark:bg-black min-h-screen pb-16"}>
        { status == "authenticated" ? <>
        <h1 className={"text-center text-orange-400 font-montserrat text-4xl my-4"}>Delete Post</h1>
        <div className={"flex mx-auto flex-col rounded-lg dark:border-orange-300 border-orange-600 border p-2 lg:w-1/2 w-3/4"}>
            <div className={"flex flex-col form-orange-400"}>
            <label className={"mx-auto dark:text-gray-100 light:text-gray-800 font-roboto text-xl"}>Post ID: <input value={form.post_id} onChange={(e) => handleChange(e)} className={"dark:bg-transparent border border-orange-400 rounded-lg text-lg"} type="text" name="post_id"/></label>    
            <button onClick={() => handleSubmit()} className={"mx-auto my-5 w-fit px-3 py-1 dark:bg-transparent border border-orange-400 rounded-lg text-lg transition-colors duration-200 hover:text-orange-400 hover:dark:border-gray-100 hover:border-gray-800 dark:text-gray-100 text-gray-800 font-roboto"}>Submit</button>
            </div>
            
        </div></> : status == "loading" ? <h1 className={"text-center text-orange-400 font-montserrat text-4xl my-4"}>Loading...</h1> : <h1 className={"text-center text-orange-400 font-montserrat text-4xl my-4"}>You are not signed in!</h1>
        }
        
        </div>
    )
}