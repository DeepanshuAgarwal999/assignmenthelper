import React from 'react'
import heroLady from '/assets/images/herogirl.gif'
import sitejabbar from '/assets/images/sitejabber.svg'
import trustpilot from '/assets/images/trustpilot.svg'
const HeroSection = () => {
    return (
        <section className='container lg:px-20 mt-10'>
            <div className='flex items-center justify-between'>
                <div className='xl:pr-10 '>
                    <h1 className='mt-10 text-4xl leading-[3rem] max-md:text-center md:text-5xl md:leading-[4rem] lg:text-7xl lg:!leading-[5.25rem] font-[500]'>
                        <span className='text-primary-100'> Hey there</span>
                        <span className='bg-primary_100 bg-clip-text text-transparent'>,<br />ready to unlock your academic potential?</span>
                        <div className='flex items-center gap-4 sm:-ml-4 w-full max-md:justify-center mt-4'>
                            <img src={sitejabbar} alt="" className='w-1/2 sm:w-1/3 sm:min-w-[230px]' />
                            <img src={trustpilot} alt="" className='w-1/2 sm:w-1/3 sm:min-w-[230px]' />
                        </div>
                    </h1>
                </div >
                <img src={heroLady} alt="assignment helper" className='hidden md:block md:w-[43%] lg:w-[45%]' />
            </div>
        </section >
    )
}

export default HeroSection