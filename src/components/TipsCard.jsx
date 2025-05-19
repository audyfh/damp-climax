import React from 'react'
import { useState } from 'react'

const TipsCard = ({tips}) => {

  const { title, description } = tips
  const [showOverlay, setShowOverlay] = useState(false);
  return (
    <div className="relative">
        {/* Main Card */}
        <div className="bg-white rounded-4xl border border-climax-green h-80 w-60 md:w-80 md:h-100 shadow-md flex flex-col justify-between items-center p-5">
            <div className="gap-y-2 flex flex-col justify-center items-center">
            <img src="/images/tips_img.svg" alt="" />
            <h2 className="font-bold text-climax-green text-center">{title}</h2>
        </div>
        <button
        onClick={() => setShowOverlay(true)}
        className="rounded-3xl border w-full border-climax-green bg-white font-bold px-3 py-1 text-climax-green"
        >
        Learn More
        </button>
    </div>
        {/* Overlay */}
    {showOverlay && (
        <div className="absolute top-0 left-0 w-full h-full bg-gray-800 opacity-80 rounded-4xl flex flex-col justify-between items-center text-white p-4 z-10">
        <div></div>
        <div className='text-center'>
            <p className='font-bold'>{title}</p>
            <p className="text-sm text-center">{description}</p>
        </div>
        
        <button
            onClick={() => setShowOverlay(false)}
            className="mt-4 px-4 py-2 border border-white text-white font-bold rounded-4xl w-full"
        >
            Close
        </button>
        </div>
    )}
    </div>
  )
}

export default TipsCard