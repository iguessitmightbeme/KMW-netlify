import React from "react";

import Slide from "../ui/Slide";


const Area = ({ title, subtitle }: { title: string, subtitle: string }) => {
    return (
        <Slide>
            <div className="max-w-5xl bg-primary p-4 rounded-md m-2">
                <h2 className="text-3xl font-bold text-contrast text-center">{title}</h2>
                <p className="mt-1 text-center text-contrast">{subtitle}</p>
            </div>
        </Slide>
    )
}

export default Area; 