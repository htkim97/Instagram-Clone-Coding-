import {client} from './sanity'

type OauthUser = {
    id:string;
    email?: string;
    name?: string;
    image?:string | null;
    username: string
}

export async function addUser({id, username, email, image, name}: OauthUser){
    return client.createIfNotExists({
        _id:id,
        _type: 'user',
        username,
        email,
        name,
        image,
        following:[],
        follwers:[],
        bookmarks:[]
        


    });
}


export async function getUserByUsername(username:string){
    return client.fetch(
        `*[_type == "user" && username == "${username}"][0]{
            ...,
            "id":_id,
            following[]->{username,image},
            followers[]->{username,image},
            "bookmarks":bookmarks[]->_id
        }`
        );
}