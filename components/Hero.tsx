import React from 'react'
import { Spotlight } from './ui/Spotlight';
import { cn } from '@/utils/cn';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';

const Hero = () => {
    return (
        <div className='pb-20 pt-16'>
            <div>
            <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
            <Spotlight className='top-40 left-100 h-[80vh] w-[50vw]' fill='purple' />
            <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue' />
        </div>
        <div className="relative flex h-screen w-full items-center justify-center bg-white dark:bg-black-100 dark:bg-grid-white/[0.01] bg-grid-black/[0.2] top-0 left-0">
                <div
                    className={cn(
                        "absolute inset-0",
                        "[background-size:40px_40px]",
                        "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                        "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
                    )}
                />
                {/* Radial gradient for the container to give a faded look */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100"/>
                <div className="flex justify-center relative my-20 z-10">
                    <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center">
                        <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
                            Welcome to Irtiza&apos;s Portfolio Website

                        </h2>
                        <TextGenerateEffect className='text-center text-[40px] md:text-4xl lg:text-5xl' words={'A SOFTWARE ENGINEER DRIVEN INTO THE WORLD OF AI AND FULL STACK DEVELOPMENT'}/>
                        <p className='text-center md:tracking-wider mb-4 text-sm'>Hi i am Irtiza, A software Engineer with <b>1.5+ years of Experience</b> in the world of Full stack Development, I am a Pakistani born Software engineer who has graduated with a BSSE Degree from the National University of Computer and Emerging Sciences, My specialites include .NET, ASP.net, .NET Core,  Next.js, Nest.js etc</p>
                        <a href="#about"><MagicButton title='Show My Work' icon={<FaLocationArrow/>} position="right"/></a>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Hero;
