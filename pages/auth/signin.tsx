import type { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { getCsrfToken } from "next-auth/react"

export default function SignIn({ csrfToken, error }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className={"flex flex-col justify-center gap-10 bg-gray-100 dark:bg-black min-h-screen pb-16"}>
        <h1 className={"text-center text-orange-400 font-montserrat text-4xl my-4"}>Sign in</h1>
        { error ? <div className={"mx-auto rounded-lg bg-red-500 border-2 border-red-800 dark:text-gray-100 text-gray-800 w-fit px-5 py-2 font-roboto font-bold"}>
            <h1>Error!</h1>
            <p>{error == "CredentialsSignin" ? "Incorrect credentials!" : "Couldn't sign you in."}</p>
        </div> : <></>}
        <div className={"flex mx-auto flex-col rounded-lg dark:border-orange-300 border-orange-600 border p-2 lg:w-1/2 w-3/4"}>
    <form method="post" action="/api/auth/callback/credentials" className={"flex flex-col justify-center gap-5"}>
      <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
      <label className={"dark:text-gray-100 light:text-gray-800 font-roboto mx-auto text-xl"}>
        Username: 
        <input className={"sm:ms-4 dark:bg-transparent border border-orange-400 rounded-lg text-lg"} name="username" type="text" />
      </label>
      <label className={"dark:text-gray-100 light:text-gray-800 font-roboto mx-auto text-xl"}>
        Password: 
        <input className={"sm:ms-4 dark:bg-transparent border border-orange-400 rounded-lg text-lg"} name="password" type="password" />
      </label>
      <button className={"d-block mx-auto my-5 w-fit px-3 py-1 dark:bg-transparent border border-orange-400 rounded-lg text-lg transition-colors duration-200 hover:text-orange-400 hover:dark:border-gray-100 hover:border-gray-800 dark:text-gray-100 text-gray-800 font-roboto"} type="submit">Sign in</button>
    </form>
            
    </div>
    </div>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
      error: context.query['error'] || null
    },
  }
}