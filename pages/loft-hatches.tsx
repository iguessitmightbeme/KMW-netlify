import React from "react";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("../components/ui/Hero"));
const Features = dynamic(() => import("../components/ui/Features"));
const Types = dynamic(() => import("../components/ui/Types"));
const CTA = dynamic(() => import("../components/ui/CTA"));
const OpenGraphTag = dynamic(() => import("../components/ui/OpenGraphTag"));

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