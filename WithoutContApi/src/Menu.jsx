import Profile from "./Profile";
function Menu({user}) {
    
    return(
        <>
        <h1>Menu</h1>
        <Profile user={user}/>
        </>
    )
}
export default Menu;