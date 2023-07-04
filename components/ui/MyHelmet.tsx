import React from 'react'; 
import Head from 'next/head';

import { CLIENT_URL } from '../../constants'; 


interface MyHelmetProps {
    seo: {
        title: string; 
        description: string; 
        slug: string;
    };
};

const MyHelmet: React.FC<MyHelmetProps> = ({ seo }) => {
    return (
        <Head>
            <title>{seo.title}</title>
            <meta name='description' content={seo.description} />
            <link rel='canonical' href={`${CLIENT_URL}/${seo.slug}`} />
        </Head>
    )
}

export default MyHelmet; 