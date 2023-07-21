import React from 'react'; 
import Slide from './Slide'; 
import Image from 'next/image';


interface ShortTypesProps {
    grid3?: boolean;
    title: string; 
    types: Array<{
        image: {
            src: string; 
            alt: string; 
        }; 
        title: string; 
        description: string; 
    }>;
};

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }

const ShortTypes: React.FC<ShortTypesProps> = ({ grid3, title, types }) => {
    return (
        <Slide>
            <div className='justify-center items-center flex flex-col'>
                <h2 className='text-3xl font-bold text-primary text-center sm:text-4xl'>{title}</h2>
                <div className={classNames(
                        grid3 ? 'md:grid-cols-3' : 'md:grid-cols-2', 
                        'mt-12 space-y-4 sm:mt-16 sm:grid sm:grid-cols-1 sm:gap-6 sm:space-y-0 md:mx-auto lg:max-w-4xl xl:mx-0 xl: max-w-none'
                )}>
                    {types.map((item, index) => (
                        <div key={index} className='divide-y divide-gray-200 rounded-lg border border-gray-200 shadow-sm overflow-hidden'>
                            <Image
                                layout="responsive"
                                width={16} 
                                height={9}
                                className='h-36 object-cover w-full'
                                src={item.image.src}
                                alt={item.image.alt}
                            />
                            <div className='p-6'>
                                <h3 className='text-lg font-medium leading-6 text-primary'>{item.title}</h3>
                                <p className='mt-4 text-sm text-secondary'>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Slide>
    )
}

export default ShortTypes; 