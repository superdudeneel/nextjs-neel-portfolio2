import React from 'react'
import Image from 'next/image';

const Profile = () => {
  return (
    <div className="px-20 flex flex-col md:px-64 space-y-6 max-w-5xl mt-20 w-full items-start">
      <Image 
        src="/profile.jpg" 
        alt="profile" 
        className="rounded-full shadow-md" 
        width={80} 
        height={80} 
      />

      <div className="space-y-2">
        <h1 className="font-sans font-semibold text-gray-900 text-4xl">Hey, I&apos;m Neel.</h1>
        <h2 className="font-sans  text-gray-700 text-4xl">Engineer & Photographer</h2>
      </div>

      <div className="flex flex-col items-start space-y-2 max-w-2xl text-gray-600 text-base leading-relaxed">
        <p>Most engineers don&apos;st see the world through a lens. Most photographers don&apos;st think in systems. I do both.</p>
        <p>Currently at IIT Roorkee.</p>
      </div>
      <div className = 'flex items-center gap-6'>
        <button className = 'px-6 py-3 rounded-lg bg-black text-white hover:bg-neutral-900 cursor-pointer'>Hire Me</button>
        <button className = 'px-7 py-3 rounded-full bg-green-100 text-green-700'>Open to Opportunities</button>
      </div>
    </div>

  )
}

export default Profile