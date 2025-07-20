import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    <div className = 'px-20 flex flex-col md:px-64 space-y-6 max-w-5xl mt-6 w-full items-start'>
        <h1 className = 'text-gray-800 text-xl font-semibold'>About</h1>
        <div className = 'max-w-xl flex flex-col'>
            <p className = 'text-gray-600'>
                Hi there! I’m Neel, an engineering student with a passion for capturing the beauty of the world through my lens. Whether it’s landscapes, cityscapes, or candid moments, I love exploring new perspectives and experimenting with light, shadows, and angles. Photography allows me to express my creativity and find beauty in the details that often go unnoticed.
                <br></br>
                <br></br>

                In addition to my love for photography, I’m also a budding engineering student, driven by my curiosity for how things work and a desire to solve real-world problems. I enjoy the challenge of applying technical knowledge to create innovative solutions, and I’m constantly learning and improving my skills.
                <br></br>
                <br></br>
                Whether I’m behind the camera or diving into engineering projects, I’m all about exploring new ideas and pushing boundaries. Thanks for stopping by, and I hope you enjoy my journey as I grow in both my passions!
            </p>
            <Link href = 'https://neelsane.com' className = 'text-indigo-700 underline underline-offset-4 mt-2'>My Personal blog</Link>
            <p className = 'text-gray-600 mt-2 font-semibold'>Here Are some of my pictures as a photograher</p>
            
            <div className="flex flex-wrap justify-center gap-6 mt-10">
  {/* Image 1 */}
            <div className="bg-white shadow-lg p-4 rounded-md w-60 rotate-[-3deg]">
                <Image width = '200' height = {200} src="/IMG_6969.jpg" alt="Desk Setup" className="rounded" />
                <p className="text-center text-sm mt-2 text-gray-700">Rajaji National Park</p>
            </div>

            {/* Image 2 */}
            <div className="bg-white shadow-lg p-4 rounded-md w-60 rotate-[4deg]">
                <Image width = '200' height = {200} src="/IMG_7298.jpg" alt="Winter" className="rounded" />
                <p className="text-center text-sm mt-2 text-gray-700">Mussorie</p>
            </div>

            {/* Image 3 */}
            <div className="bg-white shadow-lg p-4 rounded-md w-60 rotate-[2deg]">
                <Image  width = {200} height = {230} src="/IMG_9672.jpg" alt="City" className="rounded" />
                <p className="text-center text-sm mt-2 text-gray-700">Urban Vibes</p>
            </div>

            {/* Image 4 */}
            <div className="bg-white shadow-lg p-4 rounded-md w-60 rotate-[-5deg]">
                <Image width = '200' height = {230} src="/IMG_2024.jpg" alt="Mountains" className="rounded" />
                <p className="text-center text-sm mt-2 text-gray-700">Into the wild</p>
            </div>
            </div>

        </div>
    </div>
  )
}

export default About