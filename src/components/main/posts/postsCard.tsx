
import { Post } from "./service/postService"
import Image from "next/image"

type Props = { post: Post }

export default function PostsCard({
    post: { id, category, title } }: Props) {
    return (
        <section className="flex justify-between" >
            <article className="overflow-hidden rounded-md shadow-lg w-80">
            <Image className="w-full p-4" src={`/img/${id}`} alt={""} width={300} height={200} />
            <div className="flex flex-col items-center p-4">
                {title}
            </div>
            </article>
        </section>
    )
}