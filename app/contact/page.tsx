import Navbar from '@/components/Navbar'
import Contact from '@/components/Contact'
import React from 'react'

const page = () => {
  return (
    <div className = 'bg-white min-h-screen flex flex-col items-center  space-y-5'>
        <Navbar/> 
        <Contact/>    
    </div>
  )
}

export default page