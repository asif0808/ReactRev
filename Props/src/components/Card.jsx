import React from 'react'

export default function Card({Ename,role="Developer",About,image}) {
  return (
    <> 
       <div className="bg-white dark:bg-gray-800 text-black dark:text-white 
                    p-6 rounded-xl shadow-md transition">
      
      <img
        src={image}
        className="w-24 h-24 mx-auto rounded-full object-cover mb-4 border-4 border-blue-500"
      />

      <h2 className="text-2xl font-bold text-gray-800">{Ename}</h2>

      <p className="text-blue-500 font-semibold mt-1">{role}</p>

      <p className="text-gray-600 mt-3 text-sm">{About}</p>

      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
        Contact Me
      </button>

    </div></>
  )
}
