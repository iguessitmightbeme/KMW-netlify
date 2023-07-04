import React from 'react'; 
import { NextSeo } from 'next-seo'; 

import { CLIENT_URL } from '../../constants'; 


interface OpenGraphTagProps {
    seo: {
        title: string;
        description: string; 
        slug: string; 
        image?: {
            src: string; 
            alt: string; 
        }
    }
}

const OpenGraphTag: React.FC<OpenGraphTagProps> = ({ seo }) => {
    return (
        <NextSeo
            title={seo.title}
            description={seo.description}
            canonical={`${CLIENT_URL}/${seo.slug}`}
            openGraph={{
                url: `${CLIENT_URL}/${seo.slug}`, 
                title: seo.title, 
                description: seo.description, 
                images: [{
                    url: seo.image?.src ? seo.image.src : '', 
                    alt: seo.image?.alt ? seo.image.alt : ''
                }]
            }}
        />
    )
}

export default OpenGraphTag; 