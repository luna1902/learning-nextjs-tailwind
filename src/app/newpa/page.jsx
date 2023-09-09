//static data fetching
import Link from "next/link"
import getusers from "../libs/getusers"  //getusers function has been used for fetching and userpage function has been used for displaying the data fetched
export default async function UserPage() {
    const users = await getusers()  // constant users stores data returned by getusers function in lib folder
  return (
    <div className="text-center">
        <h1 className="font-bold">USERS</h1>
     {
        users.map(user => {      // users data is mapped in a paragraph using function user
        return(
            
            <p key={user.id} >
              <Link href={'/users/${user.id}'}>
              {user.name}{user.email}</Link>
             </p>
        )
    })}
    </div>
  
    )}
  
