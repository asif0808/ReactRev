import { useContext } from "react";
import UserContext from "./UserContext";

function Profile() {
    const user=useContext(UserContext)
    
    return(
        <>
        <h1>Profile</h1>
        <p>name:{user.name}</p>
        <p>role:{user.role}</p>
        </>
    )
}
export default Profile;