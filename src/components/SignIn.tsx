'use client'

import { ClientSafeProvider } from "next-auth/react"
import { signIn } from "next-auth/react"
import ColorButton from "./ui/ColorButton"


type Props= {
    providers:Record<string,ClientSafeProvider>
    callbackUrl: string;
}

export default function SignIn({ providers , callbackUrl}:Props) {
    return (
        <div>
            {Object.values(providers).map(({name,id}) => (
               <ColorButton
               key={id}
               text={`Sign in with ${name}`}
               onClick={()=>signIn(id,{callbackUrl})}
               size='big'
               />
            ))}
        </div>
    )
}