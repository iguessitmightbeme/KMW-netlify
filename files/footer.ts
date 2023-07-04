import { BsPhoneFill, BsEnvelopeOpenFill } from 'react-icons/bs'; 

export const data = {
    icon: {
        src: '/assets/full-logo.svg', 
        alt: 'KMW Loft Ladders Logo', 
    }, 
    sections: [
        {
            title: 'Company', 
            links: [
                { name: 'Home', link: '/' },
                { name: 'Success Page', link: '/success' },
            ],
        },
        {
            title: 'Services', 
            links: [

            ],
        },
        {
            title: 'Legal', 
            links: [
                
            ],
        },
    ],
    button: {
        name: 'Contact Us', 
        link: '/#contact-us',
    },
    phone: {
        label: '07977 997 537', 
        tel: '07977997537', 
        icon: BsPhoneFill,
    },
    email: {
        email: 'hello@kmwloftladders.co.uk', 
        icon: BsEnvelopeOpenFill, 
    }, 
    copyright: '2022-23 KMW Loft Ladders Ltd. All rights reserved.',
    creator: 'Website by: BoostBot Ltd',
}