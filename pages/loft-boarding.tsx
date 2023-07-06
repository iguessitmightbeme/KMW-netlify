import React from "react";

import Hero from "../components/ui/Hero";
import Features from "../components/ui/Features";
import ShortTypes from "../components/ui/ShortTypes";
import CTA from "../components/ui/CTA";
import OpenGraphTag from "../components/ui/OpenGraphTag";

import { data } from "../files/loft-boarding";


const Boarding = () => {
    return (
        <div>
            <OpenGraphTag seo={data.seo} />

            <Hero
                title={data.hero.title}
                subtitle={data.hero.subtitle}
                image={data.hero.image}
                button={data.hero.button}
            />

            <Features
                title={data.features.title}
                features={data.features.features}
            />

            <ShortTypes
                title={data.types.title}
                types={data.types.types}
            />

            <CTA
                title={data.cta.title}
                content={data.cta.subtitle}
                button={data.cta.button}
            />
        </div>
    )
}

export default Boarding; 