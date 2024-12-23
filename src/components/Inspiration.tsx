import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button";
const Inspiration = () => {
  return (

<div className="bg-pink-50 py-10 px-4 md:px-16 lg:px-20 mt-10">
  {/* Container */}
  <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
    {/* Left Text Section */}
    <div className="flex-1 flex flex-col justify-center mt-10 md:mt-40">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        50+ Beautiful rooms inspiration
      </h2>
      <p className="text-gray-600 mb-6">
        Our designer already made a lot of beautiful prototypes of rooms
        that inspire you.
      </p>
      <Button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 w-28 justify-center rounded-md font-semibold transition">
        Explore More
      </Button>
    </div>

    {/* Right Image Slider */}
    <div className="flex-1 flex gap-6 overflow-hidden">
      {/* Image 1 */}
      <div className="relative flex-shrink-0 w-80 h-96">
        <Image
          src="/assest/img-8.png" // Replace with your image path
          alt="Room 1"
          width={404}
          height={582}
          className="w-full h-full object-cover rounded-md"
        />
        {/* Image Content */}
        <div className="absolute bottom-4 left-4 bg-white px-4 py-3 shadow-lg rounded-md">
          <span className="text-gray-400 text-xs">01 — Bed Room</span>
          <p className="text-gray-800 font-bold text-sm">Inner Peace</p>
          {/* Yellow Arrow Block */}
          <div className="absolute bottom-0 right-0 bg-yellow-500 p-2 rounded-bl-md rounded-tr-md">
            <span className="text-white text-lg">→</span>
          </div>
        </div>
      </div>

      {/* Image 2 */}
      <div className="relative flex-shrink-0 w-64 h-72 mt-16">
        <Image
          src="/assest/img-9.png" // Replace with your image path
          alt="Room 2"
          width={372}
          height={486}
          className="w-full h-full object-cover rounded-md"
        />
      </div>
    </div>
  </div>

  {/* Pagination */}
  <div className="flex justify-center space-x-2 mt-6">
    <span className="h-3 w-3 bg-yellow-500 rounded-full"></span>
    <span className="h-3 w-3 bg-gray-300 rounded-full"></span>
    <span className="h-3 w-3 bg-gray-300 rounded-full"></span>
  </div>
</div>

  )
}

export default Inspiration
