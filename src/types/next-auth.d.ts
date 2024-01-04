import NextAuth,{DefaultSession} from "next-auth";

declare module 'next-auth'{
    interface Session{
        user:{
            username:string;

        }& DefaultSession['user'];
    }

    // session 안에 있는 user는 기존 default 세션에 있는 user타입 그대로 가져가면서 username을 추가
}