import React from "react";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("../components/home/Hero"));
const Features = dynamic(() => import("../components/home/Features"));
const Area = dynamic(() => import("../components/home/Area"));
const Testimonials = dynamic(() => import("../components/home/Testimonials"));
const Services = dynamic(() => import("../components/home/Services"));
const Packages = dynamic(() => import("../components/home/Packages"));
const OpenGraphTag = dynamic(() => import("../components/ui/OpenGraphTag"));
const Contact = dynamic(() => import("../components/Contact"));
const MapboxMap = dynamic(() => import("../components/map/MapContext.js"));

import { data } from "../files/home";

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full overflow-x-hidden">
            <OpenGraphTag seo={data.seo} />

            <Hero
                title={data.hero.title}
                subtitle={data.hero.subtitle}
                adj_list={data.hero.adj_list}
                image={data.hero.image}
                icon={data.hero.icon}
                stat={data.hero.stat}
            />

            <Features
                title={data.features.title}
                sections={data.features.sections}
            />

            <Area 
                title={data.serviceArea.title}
                subtitle={data.serviceArea.subtitle}
            />

            <Testimonials
                title={data.testimonials.title}
                reviews={data.testimonials.reviews}
            />

            <Services
                title={data.services.title}
                sections={data.services.sections}
            />

            <Packages
                title={data.packages.title}
                subtitle={data.packages.subtitle}
                sections={data.packages.packages}
            />

            <Contact />

            <MapboxMap />
        </div>
    )
}

export default Home; 