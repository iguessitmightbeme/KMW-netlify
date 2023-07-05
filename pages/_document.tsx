import React from 'react';
import {
    Html,
    Head, 
    Main,
    NextScript,
} from 'next/document';


export default function Document() {
    return (
        <Html lang='en' className='light'>
            <Head>
                <link href='https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css' rel='stylesheet' />
            </Head>

            <body>
                <Main />
                <NextScript />
                <noscript
                    dangerouslySetInnerHTML={{
                        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5R3TH63" height="0" width="0" style="display:none;visibility:hidden></iframe>`
                    }}
                />
                <script src="//code.tidio.co/pmwwblpvt5st5usy5fkceyqiihgd33gs.js" async></script>
            </body>
        </Html>
    )
}