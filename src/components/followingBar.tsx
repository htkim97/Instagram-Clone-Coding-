'use client'

import { DetailUser } from "@/model/user";
import Link from "next/link";
import { PropagateLoader } from "react-spinners";
import useSWR from "swr"
import Avatar from "./Avatar";
import Scroll from "./ui/ScrollBar";

export default function FollowingBar() {
  const { data, isLoading: loading, error } = useSWR<DetailUser>('api/me');
  console.log(data);
  // const users = data?.following
  const users = data?.following && [
    ...data?.following,
    ...data?.following,
    ...data?.following,
    ...data?.following
  ]

  return (
    <section className="flex items-center justify-center w-full p-4 shadow-sm shadow-neutral-300 rounded-lg min-h-[90px] overflow-x-auto">
      {loading ? <PropagateLoader size={8} color="red" /> :
        (!users || users.length === 0) && <p>{`You don't have following`}</p>
      }
      {
        users && users.length > 0 &&
      
          <Scroll>
            {users.map(({ image, username }) => (
             
                <Link
                  key={username}
                  className="flex flex-col items-center w-20"
                  href={'/user/${username}'}>
                  <Avatar image={image} highlight />
                  <p className="w-full overflow-hidden text-sm text-center text-ellipsis">
                    {username}
                  </p>
                </Link>
            
              ))}
          </Scroll>
       
      }
    </section>
  )
}