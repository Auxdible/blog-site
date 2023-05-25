export default function PostContent({ content }: { content?: string }) {
    return <div dangerouslySetInnerHTML={{__html: content||""}}></div>;
}