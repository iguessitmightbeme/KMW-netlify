import { MdRoofing, MdFitnessCenter } from "react-icons/md";
import { BsCurrencyPound, BsListUl } from "react-icons/bs";


export const data = {
    seo: {
        title: 'Loft Boarding | KMW Loft Ladders',
        description: 'Loft boarding - we install standard, raised and LoftZone boarding. KMW Loft Ladders are available for all types of loft conversions or new build properties.',
        slug: 'loft-boarding',
        image: {
            src: '/assets/loftBoarding/loft-boarding.svg',
            alt: 'Fully boarded loft with fitted loft and hatch installed by KMW Loft Ladders',
        },
    },
    hero: {
        title: 'Loft Boarding',
        subtitle: "No more gaps to fall through. Make your loft usable and safe.",
        image: {
            src: '/assets/loftBoarding/loft-boarding.svg',
            alt: 'Fully boarded loft with fitted loft and hatch installed by KMW loft ladders'
        },
        button: {
            name: 'Get Started',
            link: '/#contact-us',
        },
    },
    features: {
        title: 'Why should you board our loft?',
        features: [
            {
                title: 'Access',
                subtitle: 'Safely access the essential storage space in your loft, without falling through.',
                icon: MdRoofing
            },
            {
                title: 'Increase Value',
                subtitle: 'Increase the value of your home, by increasing usable square footage.',
                icon: BsCurrencyPound
            },
            {
                title: 'Strong and Stable',
                subtitle: 'Have confidence in accessing your loft and using it for storage.',
                icon: MdFitnessCenter
            },
            {
                title: 'Options for All',
                subtitle: 'We have options for old homes and new builds, without risking your home insurance.',
                icon: BsListUl
            },
        ],
    },
    types: {
        title: 'Which loft boarding is best for you?',
        types: [
            {
                image: {
                    src: '/assets/loftBoarding/loft-boarding.svg',
                    alt: 'Fully boarded loft with fitted loft and hatch installed by KMW loft ladders'
                },
                title: 'Standard Loft Boarding',
                description: 'Loft boarding will create a level, consistent floor across your loft without gaps. This is the perfect way to make your loft usable and safe without losing the height and feeling of space.'
            },
            {
                image: {
                    src: '/assets/loftBoarding/loftzone-raised-boarding.svg',
                    alt: 'Raised loft zone boarding with insulated gaps, installed by KMW loft ladders'
                },
                title: 'LoftZone Raised Boarding',
                description: 'Loft boarding is an ideal way of achieving a uniform and safe floor in your loft. LoftZone boarding system will not affect the performance of your loft insulation and can be fitted to all new or existing lofts. This means that lofts can be converted into attractive, habitable rooms with minimal disruption.'
            },
        ],
    },
    cta: {
        title: 'We can help you benefit from a safe and secure loft.',
        subtitle: "For a happy, hassle-free loft, choose loft boarding. Get started today with a free quote.", 
        button: {
            name: "Get started today",
            link: "/#contact-us",
        },
    },
}