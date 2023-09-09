//dynamic fetching
import getApi from "../../libs/getApi";
 export default async function UserPage({prams: {id}}){
    const userdata= await getUser(id)

    return (
        <div>
            <h1 className="font-bold">{userdata.name}</h1>
        </div>
    )
 }
 