import React, { useEffect, useState } from 'react'

function Github() {
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/asif0808')
        .then((res)=>res.json())
        .then((res)=>setData(res))
    },[])
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-700 to-blue-400 flex items-center justify-center">
  
  <div className="flex flex-col md:flex-row items-center gap-10">
    
    <img 
      src={data.avatar_url}
      className="w-100 rounded-lg"
      alt="profile"
    />

    <div className="text-white text-4xl text-center md:text-left">
      <h2>Github followers: {data.followers}</h2>
      <h2>User name: {data.name}</h2>
      <h2>Followings: {data.following}</h2>
      <h2>Repositories: {data.public_repos}</h2>
    </div>

  </div>
</div>
  )
}

export default Github