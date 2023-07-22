import React from "react";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("../components/ui/Hero"))
const Features = dynamic(() => import("../components/ui/Features"))
const CTA = dynamic(() => import("../components/ui/CTA"))
const OpenGraphTag = dynamic(() => import("../components/ui/OpenGraphTag"))

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