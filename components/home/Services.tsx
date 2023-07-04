import React from "react";
import Link from "next/link";

import Slide from "../ui/Slide";
import HoverGrowImage from "../ui/HoverGrowImage";
import { IButton, IImage } from "../../custom_types";


interface ISection {
    title: string;
    content: string[];
    image: IImage;
    button: IButton;
}

const Services = ({ title, sections }: { title: string, sections: ISection[] }) => {
    return (
        <div className="max-w-7xl p-4">
            <h2 className="text-3xl font-bold text-center">{title}</h2>
            <div className="mt-4 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {sections.map((item, index) => (
                    <Slide key={index} left={index === 1 || index === 3 ? true : false}>
                        <div className="flex flex-col overflow-hidden rounded-lg shadow-lg h-full max-h-full">
                            <div className="flex-shrink-0 overflow-hidden">
                                <HoverGrowImage
                                    image={item.image}
                                    className='h-48 w-full object-cover'
                                />
                            </div>
                            <div className="flex flex-1 flex-col justify-between p-2 h-full flex-grow">
                                <div className="flex-1">
                                    <h3 className="text-3xl font-semibold text-center text-primary">{item.title}</h3>
                                </div>
                                <div className="mt-6 flex items-center mx-4 flex-grow">
                                    <div className="flex flex-col space-y-2">
                                        {item.content.map((cont) => (
                                            <p key={cont} className="font-medium text-secondary text-justify">{cont}</p>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex-grow flex-1 flex h-full max-h-full" />
                                <div className="mt-6 flex items-center justify-end">
                                    <Link
                                        href={item.button.link}
                                    >
                                        <a className='py-2 px-4 font-semibold text-contrast bg-secondary rounded-lg hover:animate-wiggle'>
                                            {item.button.name}
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Slide>
                ))}
            </div>
        </div>
    )
}

export default Services;