import { readFile } from "fs/promises";
import path from "path";


export type Post = {
   id: string;
   category: string;
   title:string;

}

export async function getAllPosts(): Promise<Post[]>{
    const filePath = path.join(process.cwd(),'src','components','main','posts','data', 'data.json');
    return readFile(filePath, 'utf-8')
    .then<Post[]>(JSON.parse)
    
}

// C:\Users\cesc2\Desktop\portfolio\musical_blog\src\components\main\posts\data\data.json