import React from 'react'; 
import Slide from './Slide'; 
import Image from 'next/image';


interface TypesProps {
    grid3?: boolean;
    title: string; 
    types: Array<{
        image: {
            src: string; 
            alt: string; 
        }; 
        title: string; 
        description: string; 
        prices: Array<{
            label: string; 
            price: string; 
        }>;
        tech: {
            details: Array<{
                label: string; 
                detail: string; 
            }>;
            comment?: string; 
        };
    }>;
};

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }

const Types: React.FC<TypesProps> = ({ grid3, title, types }) => {
    return (
        <div className='overflow-hidden'>
            <Slide>
                <div className='flex flex-col justify-center items-center'>
                    <h2 className='text-3xl font-bold text-primary text-center'>{title}</h2>
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
                                    <div className='mt-4 flex flex-col gap-2'>
                                        {item.prices.map((price) => (
                                            <div key={price.label} className='flex flex-row justify-between'>
                                                <p className='text-secondary'>{price.label}</p>
                                                <p className='text-primary'>{price.price}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className='px-6 pt-6 pb-8'>
                                    <h4 className='text-sm font-medium text-primary'>Technical Details</h4>
                                    <ul className='mt-6 space-y-4'>
                                        {item.tech.details.map((detail) => (
                                            <li key={detail.label} className='flex flex-row justify-between'>
                                                <p className='text-secondary text-sm'>{detail.label}</p>
                                                <p className='text-primary text-sm'>{detail.detail}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Slide>
        </div>
    )
}

export default Types; 