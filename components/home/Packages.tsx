import React, { useState } from "react";
import dynamic from "next/dynamic";

import CheckIcon from "@heroicons/react/20/solid/CheckIcon";
const FadeIn = dynamic(() => import("../ui/FadeIn"))

import { classNames } from "../../constants";

interface IPrice {
    name: string;
    price: string;
}

interface ISection {
    label: string;
    title: string;
    checks: string[];
    prices: IPrice[];
    comment: string;
}

const Packages = ({ title, subtitle, sections }: { title: string, subtitle: string, sections: ISection[] }) => {
    const [currentTab, setCurrentTab] = useState<number>(0); 

    return (
        <FadeIn>
            <div className="p-4 flex flex-col gap-2">
                <div id="packages" className="idanchor" />
                <h2 className="text-primary text-3xl font-bold text-center">{title}</h2>
                <p className="text-secondary text-center">{subtitle}</p>
                <div className="flex justify-center">
                    <div className="block rounded-lg shadow-lg max-w-md text-center">
                        <div className="py-3 px-6 border-b border-gray-300">
                            <div>
                                <div className="sm:hidden">
                                    <select
                                        id="tabs"
                                        name="tabs"
                                        className="block w-full rounded-md border-gray-300 focus:border-accent focus:ring-accent"
                                        value={currentTab}
                                        onChange={(e) => setCurrentTab(Number(e.target.value))}
                                    >
                                        {sections.map((tab, index) => (
                                            <option key={tab.title} value={index}>{tab.label}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="hidden sm:block">
                                    <nav className="isolate flex divide-x divide-gray-200 rounded-lg shadow" aria-label="tabs">
                                        {sections.map((tab, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setCurrentTab(index)}
                                                className={classNames(
                                                    index === currentTab ? "text-primary" : "text-secondary hover:text-primary",
                                                    index === 0 ? "rounded-l-lg" : '', 
                                                    index === sections.length - 1 ? "rounded-lg" : "", 
                                                    "group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10"
                                                )}
                                            >
                                                <span>{tab.label}</span>
                                                <span
                                                    aria-hidden="true"
                                                    className={classNames(
                                                        index === currentTab ? "bg-primary" : "bg-transparent",
                                                        "absolute inset-x-0 bottom-0 h-0.5"
                                                    )}
                                                />
                                            </button>
                                        ))}
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 gap-2 flex flex-col">
                            <h3 className="text-2xl font-bold text-primary mb-2">{sections[currentTab].title}</h3>
                            {sections[currentTab].checks.map((item, index) => (
                                <div key={index} className="flex flex-row justify-start items-center gap-4">
                                    <CheckIcon className="w-5 h-5 text-green-600" />
                                    <p className="text-secondary">{item}</p>
                                </div>
                            ))}
                            <div className="max-w-sm flex flex-col gap-2">
                                {sections[currentTab].prices.map((item, index) => (
                                    <div key={index} className="flex flex-row justify-between">
                                        <p className="text-secondary">{item.name}</p>
                                        <p className="text-secondary">{item.price}</p>
                                    </div>
                                ))}
                                <p className="text-secondary italic">{sections[currentTab].comment}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </FadeIn>
    )
}

export default Packages;