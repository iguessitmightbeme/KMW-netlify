import React from 'react'; 
import dynamic from 'next/dynamic';

const Slide = dynamic(() => import('./Slide'))

interface FeaturesProps {
    title: string; 
    features: Array<{
        title: string; 
        subtitle: string; 
        icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; 
    }>;
}; 

const Features: React.FC<FeaturesProps> = ({ title, features }) => {
    return (
        <Slide>
            <div className='relative py-16 sm:py-24 lg:py-32'>
                <div className='mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8'>
                    <h2 className='text-3xl font-bold tracking-tight text-primary sm:text-4xl'>{title}</h2>
                    <div className='mt-12'>
                        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4'>
                            {features.map((item) => (
                                <div key={item.title} className='pt-6 h-full'>
                                    <div className='flow-root rounded-lg bg-gray-100 px-6 pb-8 h-full'>
                                        <div className='-mt-6'>
                                            <div>
                                                <span className='inline-flex items-center justify-center rounded-md bg-primary p-3 shadow-lg'>
                                                    <item.icon className='h-8 w-8 text-contrast' aria-hidden='true' />
                                                </span>
                                            </div>
                                            <h3 className='mt-8 text-lg font-medium tracking-tight text-primary'>{item.title}</h3>
                                            <p className='mt-5 text-base text-secondary'>{item.subtitle}</p>
                                            <div className='flex-grow flex' />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Slide>
    )
}; 

export default Features; 