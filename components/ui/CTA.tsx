import React from 'react'; 
import Link from 'next/link';

import FadeIn from './FadeIn';


interface CTAProps {
    title: string; 
    content: string; 
    button: {
        label: string; 
        link: string; 
    }
}; 

const CTA: React.FC<CTAProps> = ({ title, content, button }) => {
    return (
        <div className='bg-tertiary mt-4'>
            <FadeIn>
                <div className='mx-auto max-w-2xl py-16 px-4 text-center sm:py-20 sm:px-6 lg:px-8'>
                    <h2 className='text-3xl font-bold tracking-tight text-contrast sm:text-4xl'>{title}</h2>
                    <p className='mt-4 text-lg leading-6 text-gray-300'>{content}</p>
                    <Link href={button.link}>
                        <a className='mt-8 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-accent px-5 py-3 text-base font-medium text-accentcontrast hover:scale-105 hover:text-accentcontrasthover sm:w-auto'>
                            {button.label}
                        </a>
                    </Link>
                </div>
            </FadeIn>
        </div> 
    )
}

export default CTA; 