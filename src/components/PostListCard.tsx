import { SimplePost } from "@/model/posts"
import Avatar from "./Avatar";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { parseDate } from "@/util/date";
import { FaRegSmile } from "react-icons/fa";
type Props = {
    post: SimplePost
}

export default function PostListCard({post}:Props) {
    const {userImage, username, image, createdAt, likes, text} = post;
  return(
    <article className="border border-gray-200 rounded-lg shadow-md">
    <div className="flex items-center p-2">
        <Avatar image={userImage} highlight size="medium"/>
        <span className="ml-2 font-bold text-gray-900">{username}</span>
    </div>
    
    <Image src={image} alt={`photo by ${username}`} width= {500} height={500} className="object-cover w-full aspect-square" />
    <div className="flex justify-between px-4 my-2">
        <CiHeart/>
        <CiBookmark />
    </div>
    <div className="px-4 py-1">
        <p className="mb-2 text-sm font-bold">{`${likes?.length ?? 0} ${likes?.length >1 ? 'likes':'like'}`}</p>
        <p>
            <span className="mr-1 font-bold">{username}</span>
            {text}
        </p>
        <p className="my-2 text-xs uppercase text-neutral-500">{parseDate(createdAt)}</p>
        <form className="flex items-center p-3 border-neutral-300" action="">
            <FaRegSmile/>
            <input className="w-full p-3 ml-2 border-none outline-none" type="text" placeholder="Add a comment..." />
            <button className="ml-2 font-bold text-sky-500">post</button>
        </form>
    </div>
    
    </article>
  )
}