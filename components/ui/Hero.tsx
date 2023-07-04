import React from 'react'; 
import Link from 'next/link';
import Slide from '../ui/Slide'; 

interface HeroProps {
    title: string; 
    subtitle: string; 
    image: {
        src: string; 
        alt: string; 
    }; 
    button: {
        label: string; 
        link: string;
    };
};

const Hero: React.FC<HeroProps> = ({ title, subtitle, image, button }) => {
    return (
        <div className='lg:relative bg-secondary'>
            <Slide left>
                <div className='mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:py-48 lg:text-left bg-secondary'>
                    <div className='px-4 sm:px-8 lg:w-1/2 xl:pr-16'>
                        <h1 className='text-4xl font-bold tracking-tight text-contrast sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl'>
                            {title}
                        </h1>
                        <p className='mx-auto mt-3 max-w-md text-lg text-gray-300 sm:text-xl md:mt-5 md:max-w-3xl'>
                            {subtitle}
                        </p>
                        <div className='mt-10 sm:flex sm:justify-center lg:justify-start'>
                            <div className='rounded-md shadow'>
                                <Link 
                                    href={button.link}
                                >
                                    <a className='flex w-full items-center justify-center rounded-md border border-transparent bg-accent text-primaryblue px-8 py-3 text-base font-medium hover:scale-105 md:py-4 md:px-10 md:text-lg'>
                                        {button.label}
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2'>
                    <img    
                        className='absolute inset-0 h-full w-full object-cover'
                        src={image.src}
                        alt={image.alt}
                    />
                </div>
            </Slide>
        </div>
    )
}

export default Hero; 