import type { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { getCsrfToken, signOut, useSession } from "next-auth/react"

export default function SignOut() {
  const { data: session, status } = useSession();
  return (
    <div className={"flex flex-col justify-center gap-10 bg-gray-100 dark:bg-black min-h-screen pb-16"}>
        <h1 className={"text-center text-orange-400 font-montserrat text-4xl my-4"}>Sign out</h1>
        <div className={"flex mx-auto flex-col rounded-lg dark:border-orange-300 border-orange-600 border p-2 lg:w-1/2 w-3/4"}>
      <button className={"d-block mx-auto my-5 w-fit px-3 py-1 dark:bg-transparent border border-orange-400 rounded-lg text-lg transition-colors duration-200 hover:text-orange-400 hover:dark:border-gray-100 hover:border-gray-800 dark:text-gray-100 text-gray-800 font-roboto"} onClick={() => signOut()}>Sign out</button>
            
    </div>
    </div>
  )
}
