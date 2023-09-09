
import Image from "next/image"
const getPost = async() => {
     const response = await fetch("https://dog.ceo/api/breeds/image/random", {
        cache: 'no-cache', //we do the cache=no-cache part when we want to get new data every time we refresh
     })
    // every fetch request is feyched inside a temporary cache so it keeps fetching the same data everytime we refresh, so we mwntion the no-cache part to ensure that we gwt new data end points every time we refresh

     const data = await response.json()
     return data
    }
 
export default async function List(){
    const posts = await getPost()
    console.log(posts)
    return (
       
 <Image src={posts.message} width={500} height={500}  alt="dogs" ></Image>
           
                

    );
}