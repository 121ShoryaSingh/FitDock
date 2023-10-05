import Image from 'next/image'
import React from 'react'

const diet = () => {
  return (
    <div className="flex flex-col items-center py-16 h-screen">
    <h2 className="text-white font-bold text-xl">Diet plan</h2>
    <p className="font-semibold text-gray-300 mb-3">
      Diet all you have to follow
    </p>
    <div className="py-2">
      <Image src="/healtydiet.jpg" alt='' width={720} height={720}></Image>
      <h2 className="font-semibold text-white text-xl mb-2 flex flex-col items-center py-4">
        Healthy Diet
      </h2>
    </div>
  </div>
  )
}

export default diet