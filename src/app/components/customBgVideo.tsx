import React from 'react'

const BackgroundVideo = () => {
    
  return (
    <div className={``}>
        <video autoPlay muted loop className='w-[100vw]'>
            <source src={'headervideo.mp4'} type="video/mp4" />
        </video>
        <div className=' absolute flex items-center justify-center w-full bottom-10'>
        <p className=' text-white text-4xl z-10'>Travel to Your Dream Destination Today</p>
        </div>
    </div>
  )
}

export default BackgroundVideo