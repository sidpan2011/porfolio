import Image from 'next/image'
import React from 'react'
import pfp from "../../public/assets/dp.jpg"
import BlurFade from './ui/blur-fade'

const Title = () => {
    return (
        <div className='lg:mt-28 md:mt-28 mt-12 mb-10 flex flex-row'>
            <BlurFade>
            <div className='flex justify-between items-start'>
                <div className='flex flex-col max-w-lg mx-auto'>
                    <h1 className='pt-3 whitespace-pre-wrap bg-gradient-to-br bg-clip-text lg:text-6xl md:text-5xl leading-none text-black dark:text-white font-semibold tracking-tighter text-balance text-3xl translate-y-[-1rem] animate-fade-in [--animation-delay:200ms]'>hi, i'm sidhanth <span className='text-yellow-400'>👋</span></h1>
                    <p className='lg:text-xl md:text-lg text-md dark:text-white/90 text-black/90'>Frontend developer passionate about React and Next.js. Building products that make life easier.</p>
                </div>
                <div className=''>
                    <Image src={pfp} alt='Profile picture' className='ml-5 rounded-full  max-w-28' />
                </div>
            </div>
            </BlurFade>
        </div>
    )
}

export default Title