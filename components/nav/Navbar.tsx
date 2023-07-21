import React, { Fragment } from "react";
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid'; 
import Link from "next/link";

import { data } from "../../files/navbar";
import Image from "next/image";


const Navbar = () => {
    return (
        <Popover>
            <div className='mx-auto max-w-full px-4 py-6 sm:px-6 bg-primary w-full'>
                <nav className='relative flex items-center justify-between sm:h-10 md:justify-center' aria-label='Navigation'>
                    <div className='flex flex-1 items-center md:absolute md:inset-y-0 md:left-0'>
                        <div className='flex w-full items-center justify-between md:w-auto text-gray-200'>
                            <Link href='/'>
                                <>
                                    <span className='sr-only'>{data.title}</span>
                                    <Image
                                        width={150}
                                        height={75}
                                        src={data.icon.src}
                                        alt={data.icon.alt}
                                        className='h-14 w-auto sm:h-16'
                                    />
                                </>
                            </Link>
                            <div className='-mr-2 flex items-center md:hidden'>
                                <Popover.Button className='inline-flex items-center justify-center rounded-md bg-primary p-2 text-gray-50 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                                    <span className='sr-only'>Open main menu</span>
                                    <Bars3Icon className='h-6 w-6' aria-hidden='true' />
                                </Popover.Button>
                            </div>
                        </div>
                    </div>
                    <div className='hidden md:flex md:space-x-10'>
                        {data.links.map((item) => (
                                <Link href={item.link} key={item.name} className='font-medium text-gray-50 hover:text-gray-400'>
                                    <a className='font-medium text-gray-50 hover:text-gray-400'>{item.name}</a>
                                </Link> 
                        ))}
                    </div>
                    <div className='hidden md:absolute md:inset-y-0 md:right-0 md:flex md:items-center md:justify-end'>
                        <span className='inline-flex rounded-md shadow'>
                            <Link 
                                href={data.button.link}
                            >
                                <a className='inline-flex items-center rounded-md border border-transparent bg-accent hover:scale-105 px-4 py-2 text-base font-medium text-accentcontrast hover:text-accentcontrasthover'>
                                    {data.button.name}
                                </a>
                            </Link>
                        </span>
                    </div>
                </nav>
            </div>
            <Transition
                as={Fragment}
                enter='duration-150 ease-out'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='duration-100 ease-in'
                leaveTo='opacity-0 scale-95'
                leaveFrom='opacity-100 scale-100'
            >
                <Popover.Panel focus className='absolute bg-primary inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden'>
                    <div className='overflow-hidden rounded-lg bg-primary shadow-md ring-1 ring-black ring-opacity-5'>
                        <div className='flex items-center justify-between px-5 pt-4'>
                            <div>
                                <div className='h-14 w-auto'>
                                    <Image
                                        width={150}
                                        height={75}
                                        src={data.icon.src}
                                        alt={data.icon.alt}
                                    />
                                </div>
                            </div>
                            <div className="-mr-2">
                                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-primary p-2 text-gray-50 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                    <span className="sr-only">Close menu</span>
                                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                </Popover.Button>
                            </div>
                        </div>
                        <div className='px-2 pt-2 pb-3'>
                            {data.links.map((item) => (
                                    <Link
                                        href={item.link}
                                        key={item.name}
                                    >
                                        <a className='block rounded-md px-3 py-2 text-base font-medium text-gray-50 hover:text-gray-400'>
                                            {item.name}
                                        </a>
                                    </Link>
                            ))}
                        </div>
                        <Link   
                            href={data.button.link}
                        >
                            <a className='block w-full bg-accent px-5 py-3 text-center font-medium text-accentcontrast hover:text-accentcontrasthover'>
                                {data.button.name}
                            </a>
                        </Link>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}

export default Navbar;