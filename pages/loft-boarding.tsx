import React from "react";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("../components/ui/Hero"));
const Features = dynamic(() => import("../components/ui/Features"));
const ShortTypes = dynamic(() => import("../components/ui/ShortTypes"));
const CTA = dynamic(() => import("../components/ui/CTA"));
const OpenGraphTag = dynamic(() => import("../components/ui/OpenGraphTag"));

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