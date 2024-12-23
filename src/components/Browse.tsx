import Image from 'next/image'
import React from 'react'

const Browse = () => {
  return (
    <div>
        {/* Browse The Range Section */}
<div className="text-center py-12">
  {/* Title */}
  <h2 className="text-3xl font-bold mb-2">Browse The Range</h2>
  <p className="text-gray-500 mb-6">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </p>

  {/* Flex Container for Cards */}
  <div className="flex flex-wrap justify-center gap-6">
    {/* Dining Card */}
    <div className="flex flex-col items-center w-64">
      <div className="rounded-xl overflow-hidden">
        <Image src={"/assest/img-26.png"} alt='dining' width={381} height={480}
        />
      </div>
      <span className="mt-4 text-xl font-semibold">Dining</span>
    </div>

    {/* Living Card */}
    <div className="flex flex-col items-center w-64">
      <div className="rounded-xl overflow-hidden">
        <Image src={"/assest/img-27.png"} alt='dining' width={381} height={480}
        />
      </div>
      <span className="mt-4 text-xl font-semibold">Living</span>
    </div>

    {/* Bedroom Card */}
    <div className="flex flex-col items-center w-64">
      <div className="rounded-xl overflow-hidden">
        <Image src={"/assest/img-28.png"} alt='dining' width={381} height={480}
        />
      </div>
      <span className="mt-4 text-xl font-semibold">Bedroom</span>
    </div>
  </div>
</div>

    </div>
  )
}

export default Browse
