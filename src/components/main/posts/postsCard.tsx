
import { Post } from "./service/postService"
import Image from "next/image"

type Props = { post: Post }

export default function PostsCard({
    post: { id, category, title } }: Props) {
    return (

        <section className="p-1 shadow-xl w-60 h-60 card bg-base-100">
            <figure><img src={`/img/${id}`} alt="Shoes" /></figure>
            <div className="flex flex-col items-center p-2 font-bold">
                {title}
            </div>
        </section>
    )
}