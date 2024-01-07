
import "../../components/main/posts/postStyles/style.scss"
import PostsGrid from "@/components/main/posts/postsGrid";
import {getAllPosts} from "../../components/main/posts/service/postService"

export default async function SearchPage() {


  const posts = await getAllPosts();

  return (
    <section className="h-screen p-28 grow"> 
    <PostsGrid posts={posts}/>
    </section>
  )
}