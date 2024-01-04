import { getServerSession } from "next-auth/next"
import { authOptions } from "../../../pages/api/auth/[...nextauth]"
import { redirect } from "next/navigation"
import { getProviders, signIn } from "next-auth/react"
import SignIn from "@/components/ui/SignIn"
type Props={

  searchParams: {
    callbackUrl: string;
  }

}
export default async function SignPage({
  searchParams:{callbackUrl}}:Props) {
    

    const session = await getServerSession(authOptions)
    if (session) {
        return redirect('/')
      }
    
    const providers = (await getProviders())??{} // getProviders가 null을 반환할 수 있으므로 

    return(
      <section className="flex justify-center w-auto mt-24">

        <SignIn providers={providers} callbackUrl={callbackUrl ?? '/'}/>
      </section>
  )
}