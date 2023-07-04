import React from "react";

import Hero from "@components/home/Hero";
import Features from "@components/home/Features";
import Area from "@components/home/Area";
import Testimonials from "@components/home/Testimonials";
import Services from "@components/home/Services";
import Packages from "@components/home/Packages";
import OpenGraphTag from "@components/ui/OpenGraphTag";
import Contact from "@components/Contact";
import MapboxMap from "@components/map/MapContext.js";

import { data } from "files/home";

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