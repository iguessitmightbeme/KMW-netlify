import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

import CheckCircleIcon from "@heroicons/react/20/solid/CheckCircleIcon";

import { IImage } from "../../custom_types";

const Count = dynamic(() => import("../ui/Count"));
const FadeIn = dynamic(() => import("../ui/FadeIn"));

const Hero = ({ title, subtitle, adj_list, image, icon, stat }: { title: string, subtitle: string, adj_list: string[], image: IImage, icon: IImage, stat: number }) => {
    return (
        <div className="bg-secondary pb-8 sm:pb-12 lg:pb-12 w-full">
            <FadeIn>
                <div className="overflow-hidden pt-8 sm:pt-12 lg:relative lg:py-24 sm:flex">
                    <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-24 lg:px-8">
                        <div>
                            <div className="mt-2 md:ml-8">
                                <div>
                                    <Count numberInstallations={stat} />
                                </div>
                                <div className="mt-6 sm:max-w-xl">
                                    <h1 className="text-4xl font-bold tracking-tight text-contrast sm:text-5xl">
                                        {title}
                                    </h1>
                                    <p className="mt-6 text-xl text-contrast">
                                        {subtitle}
                                    </p>
                                </div>
                                <div className="mt-6 flex flex-row gap-4">
                                    <div className="flex flex-col gap-4">
                                        {adj_list.map((item) => (
                                            <div key={item} className="flex flex-row gap-4 items-center justify-start">
                                                <CheckCircleIcon className="w-5 h-5 text-accent" />
                                                <p className="text-2xl text-contrastsecondary">{item}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <Image
                                        width={140}
                                        height={140}
                                        src={icon.src}
                                        alt={icon.alt}
                                        className="h-32 w-auto"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="sm:mx-auto sm:max-w-3xl sm:px-6 flex items-center justify-center">
                            <Image 
                                width={800}
                                height={800}
                                className="w-auto h-96 rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:w-auto lg:max-w-none mt-8"
                                src={image.src}
                                alt={image.alt}
                            />
                        </div>
                    </div>
                </div>
            </FadeIn>
        </div>
    )
}

export default Hero; 