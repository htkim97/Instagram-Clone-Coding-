
// import Following from "@/components/Following";
// import Panel from "../components/main/panel/panel";
import "../components/main/posts/postStyles/style.scss"
import HomeList from "@/components/main/Home/HomeList";
import SideBar from "@/components/Bar/SideBar";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { redirect } from "next/navigation";



export default async function HomePage() {

  const session = await getServerSession(authOptions);
  const user = session?.user
  if (!user) {
    return redirect('/auth/signin');
  }




  return (
    <>
      <section className="flex h-screen grow flex-col md:flex-row w-full max-w-[850px] p-4 mt-4">
        <div className="w-full basis-3/4">
          {/* <Following /> */}
          <HomeList />
        </div>
        <div className="w-full basis-1/4">
          <SideBar user={user} />
        </div>
      </section>
    </>
  )
}