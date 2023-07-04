import React from "react";
import { IconType } from "react-icons";

import Slide from "../ui/Slide";


interface ISection {
    icon: IconType; 
    title: string;
    description: string;
}


const Features = ({ title, sections }: { title: string, sections: ISection[] }) => {
    return (
        <Slide>
            <div className="max-w-5xl flex flex-col gap-4 p-4 m-4">
                <h2 className="text-center text-primary text-3xl font-bold">{title}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {sections.map((item) => (
                        <div key={item.title} className="p-4 rounded-md shadow-xl flex flex-col space-y-2 justify-start items-center">
                            <item.icon className="w-14 h-14 text-primaryblue" />
                            <h3 className="text-xl text-primary font-semibold">{item.title}</h3> 
                            <p className="text-primary text-center">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Slide>
    )
}

export default Features;