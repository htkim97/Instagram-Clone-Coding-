import { User } from "@/model/User"
import Avatar from "./ui/Avatar"


type Props = {
    user: User
}

export default function SideBar({ user: { name, username, image } }: Props) {
    return (
        <section className="h-screen p-4 shadow-md">

            <div className="flex items-center">
                {image && <Avatar image={image} />}
                <div className="ml-4">
                    <p className="font-bold">{username}</p>
                    <p className="text-lg text-neutral-500">{name}</p>
                </div>
            </div>
            <p className="mt-8 text-sm text-neutral-500">
                About • Help • Press • API • Jobs • Privacy • Terms • Location • Language
            </p>
            <p className="mt-8 text-sm font-bold text-violet-500"> @Made By Hyeontae</p>

        </section>
    )
}