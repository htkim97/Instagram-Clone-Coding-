import FollowingBar from "@/components/followingBar";
import { authOptions } from "../pages/api/auth/[...nextauth]"
import PostList from "@/components/postList";
import SideBar from "@/components/sideBar";
import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"

export default async function HomePage() {



  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) {
    return redirect('/auth/signin')
  }


  return (
    <section className="flex flex-col md:flex-row w-full max-w-[850px] p-4">
      <div className="w-full min-w-0 basis-3/4">

        <FollowingBar />
        <PostList />
      </div>
      <div className="ml-8 basis-1/4">

        <SideBar user={user} />
      </div>
    </section>
  )
}
