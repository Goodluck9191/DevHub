'use client'

import Image from "next/image"

const ExploreBtn = () => {
  return (
    <button type="button" id="explore-btn" className="mt-7 mx-auto ">
        <a href="#Events">
            Explore Events
            <Image src="/icons/arrow-down.svg" width={24} height={24} alt="arrow-down" />
        </a>
    </button>
  )
}

export default ExploreBtn