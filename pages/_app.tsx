import React from "react";
import type { AppProps } from "next/app";
import Script from "next/script";
import { LocalBusinessJsonLd } from "next-seo";

import '../styles/globals.css';
import Navbar from "@components/nav/Navbar";
import Footer from "@components/nav/Footer";

import { data as homeData } from "files/home";
import { CLIENT_URL } from "constants";


function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div className="w-full overflow-hidden">
            <Script id='google-tag-manager' strategy="afterInteractive">
                {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-5R3TH63');`}
            </Script>
            <LocalBusinessJsonLd
                type="HomeAndConstructionBusiness"
                id={CLIENT_URL}
                url={CLIENT_URL}
                telephone='+447977997537'
                name="KMW Loft Ladders Ltd"
                description={homeData.seo.description}
                images={['/android-chrome-512x512.png']}
                address={{
                    streetAddress: '3 Loveridge Avenue', 
                    addressLocality: 'Kempston', 
                    addressRegion: 'Bedfordshire', 
                    postalCode: 'MK42 8SG', 
                    addressCountry: 'GB'
                }}
                geo={{
                    latitude: 52.12537, 
                    longitude: -0.50026
                }}
                openingHours={[
                    {
                        opens: "08:00", 
                        closes: "18:30", 
                        dayOfWeek: [
                            "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
                        ]
                    }
                ]}
                priceRange='$'
                rating={{
                    ratingValue: 5, 
                    reviewCount: 117, 
                    worstRating: 4, 
                    bestRating: 5 
                }}
            />

            <Navbar />

            <Component />

            <Footer />
        </div>
    )
}