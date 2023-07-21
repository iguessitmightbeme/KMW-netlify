import React from "react";
import Link from "next/link";

import { data } from "../../files/footer";
import Image from "next/image";


const Footer = () => {
    return (
        <footer className="bg-primary" aria-labelledby="footer-heading">
            <h2 id='footer-heading' className="sr-only">Footer</h2>
            <div className="mx-auto max-w-7lg py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                    <div className="space-y-8 lg:col-span-1">
                        <Image
                            width={150} 
                            height={75}
                            src={data.icon.src}
                            alt={data.icon.alt}
                            className='h-16 sm:h-24'
                        />
                        <a 
                            className="flex flex-row justify-start items-center gap-4"
                            href={`mailto:${data.email.email}`}
                        >
                            <data.email.icon className="w-5 h-5 text-accent hover:scale-105" />
                            <p className="text-md font-medium text-contrast">{data.email.email}</p>
                        </a>
                        <a 
                            className="flex flex-row justify-start items-center gap-4"
                            href={`tel:${data.phone.tel}`}
                        >
                            <data.phone.icon className="w-5 h-5 text-accent hover:scale-105" />
                            <p className="text-md font-medium text-contrast">{data.phone.label}</p>
                        </a>
                    </div>
                    <div className="mt-12 gap-8 lg:col-span-2 lg:mt-0">
                        <div className="grid grid-cols-2 gap-4 md:grid md:grid-cols-3 md:gap-8">
                            {data.sections.map((item, index) => (
                                <div key={index}>
                                    <h3 className="text-base font-semibold text-contrast">{item.title}</h3>
                                    <ul className="mt-4 space-y-2">
                                        {item.links.map((link, ind) => (
                                            <li key={ind}  className='text-base text-gray-300 hover:text-gray-50'>
                                                <Link
                                                    href={link.link}
                                                >{link.name}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-200 pt-8 flex flex-row gap-8 items-center justify-center">
                    <p className="text-base text-gray-400 lg:text-center">&copy; {data.copyright}</p>
                    <p className="text-base text-gray-400 lg:text-center">{data.creator}</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer; 