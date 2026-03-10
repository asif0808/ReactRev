function Profile({user}) {
    return(
        <>
        <h1>Profile</h1>
    
            <p>Name :{user.fname}</p>
            <p>Role: {user.role}</p>
    
        </>
    );
}
export default Profile;