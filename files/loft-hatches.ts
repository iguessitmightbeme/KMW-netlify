import { MdRoofing } from "react-icons/md";
import { BsCurrencyPound, BsEyeSlashFill, BsListUl } from "react-icons/bs";


export const data = {
    seo: {
        title: 'Loft Hatches | KMW Loft Ladders',
        description: 'Trust our loft hatches to be reliable, easy to use, and secure. Let us take the hassle out of your loft with a bespoke loft hatch and ladder.',
        slug: 'loft-hatches',
        image: {
            src: '/assets/loftHatches/loft-hatch.svg',
            alt: 'Open plastic insulated hatch installed by KMMW loft ladders'
        },
    },
    hero: {
        title: 'Loft Hatch Modification & Creation', 
        subtitle: 'Gain access to your loft space in a safe and secure way.', 
        image: {
            src: '/assets/loftHatches/loft-hatch.svg', 
            alt: 'Open plastic insulated hatch installed by KMMW loft ladders'
        }, 
        button: {
            name: 'Get in touch', 
            link: '/#contact-us'
        }
    },
    features: {
        title: 'Why do you need a loft hatch?', 
        features: [
            {
                title: 'Access', 
                subtitle: 'Safely access the essential storage space in your loft.', 
                icon: MdRoofing
            }, 
            {
                title: 'Increase Value', 
                subtitle: 'Increase the value of your home, by increasing the accessible square footage.', 
                icon: BsCurrencyPound
            }, 
            {
                title: 'Discrete', 
                subtitle: 'Our loft hatches fit into your ceiling without creating an eye sore.', 
                icon: BsEyeSlashFill, 
            }, 
            {
                title: 'Lots to Choose', 
                subtitle: 'You can choose a hatch that suits your budget.', 
                icon: BsListUl
            }
        ]
    },
    types: {
        title: 'Which loft hatch is best for you?', 
        types: [
            {
                image: {
                    src: '/assets/loftHatches/types/plastic-insulated-hatch.svg', 
                    alt: 'Open white plastic insulated loft hatch installed by KMW loft ladders'
                }, 
                title: 'Plastic Insulated Hatch', 
                description: 'With our insulated plastic loft hatch, you can easily access your loft without taking up any floor space or attic room. Our expert installation service ensures that your loft hatch is fitted perfectly.',
                prices: [
                    { label: 'Price', price: '£80 ex. VAT' }
                ], 
                tech: {
                    details: [
                        { label: 'Hatch Size', detail: '600mm x 520mm' }, 
                        { label: 'Material', detail: 'Plastic' }, 
                        { label: 'Colour', detail: 'White' }
                    ]
                }
            }, 
            {
                image: {
                    src: '/assets/loftHatches/types/mdf-hatch.svg', 
                    alt: 'Custom made MDF hatch installed by KMW loft ladders'
                }, 
                title: 'MDF Loft Hatch', 
                description: 'Make the room above your loft your own with this MDF loft hatch. A custom made, fitted loft hatch makes it simple to create a unique storage solution for your loft area, giving you the best of both worlds - access from above and below. Painted to fit your home.',
                prices: [
                    { label: 'Price', price: '£10 ex. VAT' }
                ], 
                tech: {
                    details: [
                        { label: 'Hatch Size', detail: 'Made to measure' }, 
                        { label: 'Material', detail: 'MDF' }, 
                        { label: 'Colour', detail: 'Painted MDF' }
                    ]
                }
            }
        ]
    },
    cta: {
        title: 'We can help you benefit from an accessible loft.', 
        description: 'Loft hatches provide you easy access to your loft without taking up precious space within your home. We can find a solution to fit all your needs.', 
        button: {
            name: 'Get started today', 
            link: '/#contact-us'
        }
    }
}