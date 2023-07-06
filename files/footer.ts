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
                { nam: "Packages", link: '/#Packages' },
            ],
        },
        {
            title: 'Services', 
            links: [
                { name: "Ladders", link: "/loft-ladders" },
                { name: "Hatches", link: "/loft-hatches" },
                { name: "Boarding", link: "/loft-boarding" }, 
                { name: "Insulation", link: "/loft-insulation" }, 
            ],
        },
        {
            title: 'Legal', 
            links: [
                { name: "Privacy", link: "/privacy" }, 
                { name: "Cookies", link: "/cookies" },
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