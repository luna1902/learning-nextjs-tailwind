
//static api fetching
export default async function getusers() {  
const response = await fetch('https://jsonplaceholder.typicode.com/users') //stores data fetched by api

   if(!response.ok){
     throw new Error('failed to fetch user')
   }

   return (await response.json()) //response.json converts the contents of response into json form and returns value
 }
