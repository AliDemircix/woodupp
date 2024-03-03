export type Thumbnail = {
    id: string;
    src: string;
    name: string;
};

export interface ProductImagesByColor {
    name: string;
    mainColorImage: string;
    colorSamples: string[];
}
export type Product = {
    id: number;
    name: string;
    code: string;
    dimensions: { width: number; height: number; depth: number };
    description: string;
    images: string[];
    thumbnailImages: Thumbnail[];
    colors: ProductImagesByColor[];
    productMainImage: { name: string; link: string };
};
export const products: Product[] = [
    {
        id: 1,
        name: 'Akupanel | 240',
        code: 'akupanel-240',
        description: '',
        productMainImage: {
            name: 'walnoot',
            link: '/TGSX-8003-walnoot-wood-1.jpg',
        },
        dimensions: { width: 240, height: 60, depth: 2.2 },
        colors: [
            {
                name: 'walnoot',
                mainColorImage: '/TGSX-8003-walnoot-wood-1.jpg',
                colorSamples: ['/TGSX-8003-walnoot-wood-1.jpg', '/TGSX-8003-walnoot-wood-2.jpg', '/TGSX-8003-walnoot-wood-3.jpg'],
            },
            {
                name: 'geel',
                mainColorImage: '/TGSX-8019-geel-eiken-1.jpg',
                colorSamples: ['/TGSX-8019-geel-eiken-1.jpg', '/TGSX-8019-geel-eiken-2.jpg', '/TGSX-8019-geel-eiken-3.jpg'],
            },
            {
                name: 'wit',
                mainColorImage: '/TGSX-8013-wit-eiken-1.jpg',
                colorSamples: ['/TGSX-8013-wit-eiken-1.jpg', '/TGSX-8013-wit-eiken-2.jpg', '/TGSX-8013-wit-eiken-3.jpg'],
            },
            {
                name: 'zilver',
                mainColorImage: '/TGSX-8005-zilver-1.jpg',
                colorSamples: ['/TGSX-8005-zilver-1.jpg', '/TGSX-8005-zilver-2.jpg', '/TGSX-8005-zilver-3.jpg'],
            },
            {
                name: 'zwart',
                mainColorImage: '/TGSX-8010-zwart-1.jpg',
                colorSamples: ['/TGSX-8010-zwart-1.jpg', '/TGSX-8010-zwart-2.jpg', '/TGSX-8010-zwart-3.jpg'],
            },
        ],
        images: [
            '/akupanel-copper-oxide-showcase.jpg',
            '/akupanel-grey-oxide-showcase.jpg',
            '/akupanel-oxide-blue-showcase.jpg',
            '/akupanel-white-oxide-showcase.jpg',
            '/akupanel-charcoal-showcase.jpg',
            '/akupanel-snow-showcase.jpg',
        ],
        thumbnailImages: [
            {
                id: 'a1',
                src: '/TGSX-8003-walnoot-wood-1.jpg',
                name: 'Akupanel | 240 – Klassiek Wood (Walnoot)',
            },
            {
                id: 'a2',
                src: '/TGSX-8019-geel-eiken-1.jpg',
                name: 'Akupanel | 240 – Klassiek Eiken (Geel)',
            },
            {
                id: 'a3',
                src: '/TGSX-8013-wit-eiken-1.jpg',
                name: 'Akupanel | 240 – Klassiek Eiken (Wit)',
            },
            {
                id: 'a4',
                src: '/TGSX-8005-zilver-1.jpg',
                name: 'Akupanel | 240 – Klassiek Eiken (Zilver)',
            },
            {
                id: 'a5',
                src: '/TGSX-8010-zwart-1.jpg',
                name: 'Akupanel | 240 – Klassiek Eiken (Zwart)',
            },
        ],
    },
    {
        id: 2,
        name: 'Akupanel | 300 Klassiek Eiken',
        code: 'akupanel-300',
        description: '',
        dimensions: { width: 60, height: 60, depth: 2.2 },
        productMainImage: {
            name: 'walnoot',
            link: '/TGSX-8003-walnoot-wood-1.jpg',
        },
        colors: [
            {
                name: 'walnoot',
                mainColorImage: '/TGSX-8003-walnoot-wood-1.jpg',
                colorSamples: ['/TGSX-8003-walnoot-wood-1.jpg', '/TGSX-8003-walnoot-wood-2.jpg', '/TGSX-8003-walnoot-wood-3.jpg'],
            },
            {
                name: 'geel',
                mainColorImage: '/TGSX-8019-geel-eiken-1.jpg',
                colorSamples: ['/TGSX-8019-geel-eiken-1.jpg', '/TGSX-8019-geel-eiken-2.jpg', '/TGSX-8019-geel-eiken-3.jpg'],
            },
            {
                name: 'wit',
                mainColorImage: '/TGSX-8013-wit-eiken-1.jpg',
                colorSamples: ['/TGSX-8013-wit-eiken-1.jpg', '/TGSX-8013-wit-eiken-2.jpg', '/TGSX-8013-wit-eiken-3.jpg'],
            },
            {
                name: 'zilver',
                mainColorImage: '/TGSX-8005-zilver-1.jpg',
                colorSamples: ['/TGSX-8005-zilver-1.jpg', '/TGSX-8005-zilver-2.jpg', '/TGSX-8005-zilver-3.jpg'],
            },
            {
                name: 'zwart',
                mainColorImage: '/TGSX-8010-zwart-1.jpg',
                colorSamples: ['/TGSX-8010-zwart-1.jpg', '/TGSX-8010-zwart-2.jpg', '/TGSX-8010-zwart-3.jpg'],
            },
        ],
        images: [
            '/akupanel-60-classic-oak-vertical-2048x2048.png.webp',
            '/akupanel-60-classic-oak-vertical-1536x1536.png',
            '/Akupanel60-natural-horisontal.png',
            '/akupanel-60-walnut-vertical-1536x1536.png',
            '/Akupanel60-brown-horisontal.png',
            '/Akupanel60-grey-horisontal.png',
        ],
        thumbnailImages: [
            {
                id: 'b1',
                src: '/TGSX-8003-walnoot-wood-1.jpg',
                name: 'Akupanel | 60 – Klassiek Wood (Walnoot)',
            },
            {
                id: 'b2',
                src: '/TGSX-8019-geel-eiken-1.jpg',
                name: 'Akupanel | 60 – Klassiek Eiken (Geel)',
            },
            {
                id: 'b3',
                src: '/TGSX-8013-wit-eiken-1.jpg',
                name: 'Akupanel | 60 – Klassiek Eiken (Wit)',
            },
            {
                id: 'b4',
                src: '/TGSX-8005-zilver-1.jpg',
                name: 'Akupanel | 60 – Klassiek Eiken (Zilver)',
            },
            {
                id: 'b5',
                src: '/TGSX-8010-zwart-1.jpg',
                name: 'Akupanel | 60 – Klassiek Eiken (Zwart)',
            },
        ],
    },
];
export const middleHeroData = [
    {
        id: 'hero1',
        title: 'De Opmetingen',
        img: {
            src: '/pr1.jpg',
            alt: 'opbouw paneel',
        },
        content: [
            'Opbouw paneel',
            'Afmeting 240/300cm x 60cm',
            'Lat dikte 13mm',
            'Lat breedte 27mm',
            'Vilt dikte 9mm',
            'Paneel dikte 24mm',
            'Afstand tussen de latten is 13mm',
        ],
    },
    {
        id: 'hero2',
        title: 'De Lagen Van Het Product',
        img: {
            src: '/pr2.jpg',
            alt: 'duurzame materialen',
        },
        content: ['Duurzame materialen', 'Gereeyeled vilt', 'Geluidsabsorerend (%85)', 'Goede kwaliteit', 'Betere akoestiek'],
    },
];
