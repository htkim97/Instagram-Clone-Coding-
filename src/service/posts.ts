import { SimplePost } from "@/model/posts";
import { client, urlFor } from "./sanity";

const simplePostProjection = `

    ...,
    "username": author->username,
    "image": photo,
    "userImage": author->image,
    "likes" : likes[]->username,
    "text" : comments[0].comment,
    "comments" : count(comments),
    "id":_id,
    "createdAt":_createdAt
`

export async function getFollowingPostsOf(username:string){
    return client.fetch(
        `*[_type == "post" && author->username == "${username}"
            || author._ref in *[_type == "user" && username =="${username}"].following[]._ref]
            | order(_createdAt desc){${simplePostProjection}}`
    )
    .then(posts =>
        posts.map((post:SimplePost)=>({...post,image:urlFor(post.image)}))
    )
}