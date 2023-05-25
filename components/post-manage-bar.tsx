import Link from "next/link";

export default function PostManageBar() {
    return (<div className={"flex mx-auto justify-center gap-4"}>
        
        <Link href="/manage/create-post" className={"manage-button"}>Create Post</Link>
        <Link href="/manage/delete-post" className={"manage-button"}>Delete Post</Link>
    </div>)
}