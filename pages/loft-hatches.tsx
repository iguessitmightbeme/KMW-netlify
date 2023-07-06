import React from "react";

import Hero from "../components/ui/Hero";
import Features from "../components/ui/Features";
import Types from "../components/ui/Types";
import CTA from "../components/ui/CTA";
import OpenGraphTag from "../components/ui/OpenGraphTag";

import { data } from "../files/loft-hatches";


const Hatches = () => {
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

            <Types
                grid3
                title={data.types.title}
                types={data.types.types}
            />

            <CTA
                title={data.cta.title}
                content={data.cta.description}
                button={data.cta.button}
            />
        </div>
    )
}

export default Hatches