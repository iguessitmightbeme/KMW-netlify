import { BsThermometerHalf, BsCurrencyPound } from 'react-icons/bs';
import { BiWorld } from 'react-icons/bi';
import { HiTrendingUp } from 'react-icons/hi';


export const data = {
    seo: {
        title: 'Loft Insulation | KMW Loft Ladders',
        description: 'Keep your home warmer for longer with KMW Loft Ladders insulation services. Up to 25% of heat is lost through your roof space creating huge energy bills. We can help you reduce this!',
        slug: 'loft-insulation',
        image: {
            src: '/assets/loftInsulation/insulation.svg',
            alt: 'Home insulation to save money on energy bills'
        }
    },
    hero: {
        title: 'Loft Insulation',
        subtitle: 'Save energy, save money and help the environment while keeping your home warm.',
        image: {
            src: '/assets/loftInsulation/insulation.svg',
            alt: 'Home insulation to save money on energy bills'
        },
        button: {
            name: 'Get Started',
            link: '/#contact-us'
        }
    },
    features: {
        title: 'Why should you insulate your loft?',
        features: [
            {
                title: 'Energy Efficiency',
                subtitle: '25% of a homes heat is lost through the roof. Reduce this with insulation.',
                icon: BsThermometerHalf
            },
            {
                title: 'Cheap',
                subtitle: 'Cheaper and less disruptive that wall insulation, with a greater effect.',
                icon: BsCurrencyPound
            },
            {
                title: 'Save the Environment',
                subtitle: 'Reduce your carbon footprint, by reducing your energy consumption.',
                icon: BiWorld,
            },
            {
                title: 'Increase Value',
                subtitle: 'Increase the value of your home, with loft insulation.',
                icon: HiTrendingUp
            }
        ]
    },
    cta: {
        title: 'We can help you benefit from a well insulated loft.',
        subtitle: 'Get started with loft insulation, for a warm and environmentally conscious home.',
        button: {
            name: 'Get in touch',
            link: '/#contact-us'
        },
    },
}