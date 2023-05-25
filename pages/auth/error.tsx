import { InferGetServerSidePropsType, NextPageContext } from "next";

export default function AuthError({ error }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (<div className={"flex flex-col justify-center gap-10 bg-gray-100 dark:bg-black min-h-screen pb-16"}>
    <div className={"mx-auto text-center rounded-lg bg-red-500 border-2 border-red-800 dark:text-gray-100 text-gray-800 w-fit px-5 py-2 font-roboto font-bold"}>
    <h1>Error!</h1>
    <p>{error || "Not sure quite what the error is."}</p>
</div>
</div>);
}
export function getServerSideProps(context: NextPageContext) {
    return {
        props: {
            error: context.query['error'] || null
        }
    }
}