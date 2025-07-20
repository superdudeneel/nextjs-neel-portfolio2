import React from 'react'
import Image from 'next/image';

const Tech = () => {
  return (
    <section className="w-full bg-white py-10 max-w-3xl px-30 ">
  <div className="max-w-2xl mx-auto px-6">
    <h2 className="text-3xl font-bold text-gray-900 mb-6">Tech Stack</h2>
    <p className="text-gray-600 mb-12">
      Tools I use to build full-stack applications:
    </p>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center justify-center">
      {/* React */}
      <div className="flex flex-col items-center space-y-2">
        <Image
          width = '12'
          height = '12'
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          alt="React"
          className="w-12 h-12"
        />
        <p className="text-sm text-gray-700">React</p>
      </div>

      {/* Next.js */}
      <div className="flex flex-col items-center space-y-2">
        <Image
          width = '12'
          height = '12'
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
          alt="Next.js"
          className="w-12 h-12 bg-white rounded"
        />
        <p className="text-sm text-gray-700">Next.js</p>
      </div>
      {/* Node.js */}
      <div className="flex flex-col items-center space-y-2">
        <Image
          width = '12'
          height = '12'
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
          alt="Node.js"
          className="w-12 h-12"
        />
        <p className="text-sm text-gray-700">Node.js</p>
      </div>

      {/* MongoDB */}
      <div className="flex flex-col items-center space-y-2">
        <Image
          width = '12'
          height = '12'
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
          alt="MongoDB"
          className="w-12 h-12"
        />
        <p className="text-sm text-gray-700">MongoDB</p>
      </div>

      {/* Express */}
      <div className="flex flex-col items-center space-y-2">
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
          alt="Express"
          width = '12'
          height = '12'
          className="w-12 h-12 bg-white rounded"
        />
        <p className="text-sm text-gray-700">Express</p>
      </div>

      {/* TypeScript */}
      <div className="flex flex-col items-center space-y-2">
        <Image
          width = '12'
          height = '12'
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
          alt="TypeScript"
          className="w-12 h-12"
        />
        <p className="text-sm text-gray-700">TypeScript</p>
      </div>

      {/* Git/GitHub */}
      <div className="flex flex-col items-center space-y-2">
        <Image
          width = '12'
          height = '12'
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
          alt="GitHub"
          className="w-12 h-12 bg-white rounded"
        />
        <p className="text-sm text-gray-700">GitHub</p>
      </div>
    </div>
  </div>
</section>


  )
}

export default Tech