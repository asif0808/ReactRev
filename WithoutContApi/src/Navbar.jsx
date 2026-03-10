import Menu from "./Menu";
function Navbar({user}) {
    
    return(
        <>
        <h1>Navbar</h1>
        <Menu user={user}/>
        </>
    )
}
export default Navbar;