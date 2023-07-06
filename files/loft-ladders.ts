import { MdRoofing } from "react-icons/md";
import { BsCurrencyPound, BsClock, BsListUl } from "react-icons/bs";


export const data = {
    seo: {
        title: "Loft Ladders | KMW Loft Ladders",
        description: "We have a range of loft ladders to make your loft easier. We have aluminium, heavy-duty and telescopic loft ladders. Contact us for quick and clean installation.",
        slug: "loft-ladders",
        image: {
            src: "/assets/loftLadders/loft-ladder.jpeg",
            alt: "Aluminium loft ladder installation",
        },
    },
    hero: {
        title: "Loft Ladder Installation",
        subtitle: "Make the most of your loft space in a safe and secure way.",
        image: {
            src: "/assets/loftLadders/loft-ladder.jpeg",
            alt: "Aluminium loft ladder installation",
        },
        button: {
            name: "Get in touch",
            link: "/#contact-us"
        },
    },
    features: {
        title: 'Why do you need a loft ladder?',
        features: [
            {
                title: 'Access',
                subtitle: 'Safely access the essential storage space in your loft.',
                icon: MdRoofing
            },
            {
                title: 'Increase Value',
                subtitle: 'Increase the value of your home, by increasing accessible square footage.',
                icon: BsCurrencyPound
            },
            {
                title: 'Save Time',
                subtitle: 'No more carrying a ladder up the stairs to reach your loft, your loft ladder will always be easily accessible.',
                icon: BsClock
            },
            {
                title: 'Lots to Choose',
                subtitle: 'You can choose from a variety of loft ladders, to suit your needs and your home.',
                icon: BsListUl
            },
        ],
    },
    types: {
        title: 'Which loft ladder is best for you?',
        types: [
            {
                title: 'Aluminium Loft Ladder',
                image: {
                    src: '/assets/loftLadders/types/aluminium-ladder.svg',
                    alt: 'Alumnium loft ladder installed by KMW loft ladders',
                },
                description: 'Our aluminium loft ladder is by far our most popular product. With its quality design and affordable price, the ladder is a fantastic choice for any home. Designed to make your life easier, not harder.',
                prices: [
                    { label: 'Ladder Only', price: '£175 ex. VAT' },
                    { label: 'with MDF hatch', price: '£185 ex. VAT' },
                    { label: 'with Plastic hatch', price: '£255 ex. VAT' }
                ],
                tech: {
                    details: [
                        { label: 'Max Load', detail: '100kg / 15st 7lbs' },
                        { label: 'Material', detail: 'Anodised Aluminium' },
                        { label: 'Weight', detail: '7.0kgs' },
                        { label: 'Min. Hatch Size', detail: '508mm x 432mm' },
                        { label: 'Floor to Ceiling', detail: '2.30m to 3.0m' },
                        { label: 'Tread Depth', detail: '50mm' },
                    ],
                    comment: '*Price includes converting your existing loft hatch to a hinged hatch, or supply of a paintable MDF hatch.'
                }
            },
            {
                title: 'Heavy Duty Ladder',
                image: {
                    src: '/assets/loftLadders/types/heavy-duty-ladder-collapsed.jpg',
                    alt: 'Heavy duty loft ladder installed by KMW Loft ladders'
                },
                description: 'If you have a large loft and need extra stability, or you just have large items to store in your loft, then this heavy duty loft ladder is for you.',
                prices: [
                    { label: 'Ladder Only', price: '£215 ex. VAT' },
                    { label: 'with MDF hatch', price: '£225 ex. VAT' },
                    { label: 'with Plastic hatch', price: '£295 ex. VAT' }
                ],
                tech: {
                    details: [
                        { label: 'Max Load', detail: '150kg / 23st 7lbs' },
                        { label: 'Material', detail: 'Anodised Aluminium' },
                        { label: 'Min. Hatch Size', detail: '560mm x 457mm' },
                        { label: 'Floor to Ceiling', detail: '> 2.91m' }
                    ],
                    comment: '*Price includes converting your existing loft hatch to a hinged hatch, or supply of a paintable MDF hatch.'
                }
            },
            {
                title: 'Telescopic Loft Ladder',
                image: {
                    src: '/assets/loftLadders/types/telescopic-loft-ladder.jpg',
                    alt: 'Telescopic loft ladder installed by KMW loft ladders'
                },
                description: "A telescopic loft ladder that's designed to be easy to use and take up less space. It's perfect for smaller spaces and allows for quick access to your loft without sacrificing safety.",
                prices: [
                    { label: 'Ladder Only', price: '£305 ex. VAT' },
                    { label: 'with MDF hatch', price: '£315 ex. VAT' },
                    { label: 'with Plastic hatch', price: '£385 ex. VAT' }
                ],
                tech: {
                    details: [
                        { label: 'Max Load', detail: '150kg / 23st 7lbs' },
                        { label: 'Material', detail: 'Anodised Aluminium' },
                        { label: 'Weight', detail: '12.5kgs' },
                        { label: 'Min. Hatch Size', detail: '600mm x 520mm' },
                        { label: 'Floor to Ceiling', detail: '2.35m to 2.45m' }
                    ]
                }
            }
        ]
    },
    cta: {
        title: 'We can help you benefit from a loft ladder',
        subtitle: 'Loft ladders are a great way to access your loft. Increasing the value of your home and allowing you to store large items with ease.',
        button: {
            name: 'Get started today',
            link: '/#contact-us'
        },
    }
}