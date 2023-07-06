import React from "react";

import Hero from "../components/ui/Hero";
import Features from "../components/ui/Features";
import Types from "../components/ui/Types";
import CTA from "../components/ui/CTA";
import OpenGraphTag from "../components/ui/OpenGraphTag";

import { data } from "../files/loft-insulation";


const Insulation = () => {
    return (
        <div>
            <OpenGraphTag seo={data.seo} />

            <Hero
                title={data.hero.title}
                subtitle={data.hero.subtitle}
                button={data.hero.button}
                image={data.hero.image}
            />


            <Features
                title={data.features.title}
                features={data.features.features}
            />

            <CTA
                title={data.cta.title}
                content={data.cta.subtitle}
                button={data.cta.button}
            />
        </div>
    )
}

export default Insulation