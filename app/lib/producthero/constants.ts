export type Thumbnail = {
  id: string;
  src: string;
  name: string;
  price: number;
};
export type Product = {
  id: number;
  name: string;
  description: string;
  images: string[];
  thumbnailImages: Thumbnail[];
};
export const products: Product[] = [
  {
    id: 1,
    name: 'Akupanel | 240',
    description: '',
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
        src: '/akupanel-copper-oxide-100x100.jpg.webp',
        name: 'Akupanel | 240 – Klassiek Eiken Zwart MDF (Zwart Vilt)',
        price: 110,
      },
      {
        id: 'a2',
        src: '/akupanel-grey-oxide-100x100.jpg.webp',
        name: 'Akupanel | 240 – Klassiek Eiken (Zwart Vilt)',
        price: 130,
      },
      {
        id: 'a3',
        src: '/akupanel-oxide-blue-100x100.jpg.webp',
        name: 'Akupanel | 240 – Klassiek Eiken (Grijs Vilt)',
        price: 135,
      },
      {
        id: 'a4',
        src: '/akupanel-white-oxide-100x100.jpg.webp',
        name: 'Akupanel | 240 – Klassiek Eiken (Witte Vilt)',
        price: 120,
      },
      {
        id: 'a5',
        src: '/akupanel-charcoal-100x100.jpg.webp',
        name: 'Akupanel | 240 – Klassiek Eiken (charcoal Vilt)',
        price: 130,
      },
      {
        id: 'a6',
        src: '/akupanel-snow-100x100.jpg.webp',
        name: 'Akupanel | 240 – Klassiek Eiken (Snow Vilt)',
        price: 125,
      },
    ],
  },
  {
    id: 2,
    name: 'Akupanel | 300 Klassiek Eiken',
    description: '',
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
        src: '/classic-oak-black-felt-front-100x100.jpg',
        name: 'Akupanel | 60 – Klassiek Eiken (Grijs Vilt)',
        price: 130,
      },
      {
        id: 'b2',
        src: '/classic-oak-black-felt-front-100x100.jpg',
        name: 'Akupanel | 60 – Klassiek Eiken (Grijs Vilt)',
        price: 110,
      },
      {
        id: 'b3',
        src: '/rustic-natural-oak-front-100x100.jpg',
        name: 'Akupanel | 60 – Klassiek Eiken (Grijs Vilt)',
        price: 120,
      },
      {
        id: 'b4',
        src: '/walnut-front-100x100.jpg',
        name: 'Akupanel | 60 – Klassiek Eiken (Grijs Vilt)',
        price: 135,
      },
      {
        id: 'b5',
        src: '/rustic-brown-front-100x100.jpg',
        name: 'Akupanel | 60 – Klassiek Eiken (Bruen Vilt)',
        price: 130,
      },
      {
        id: 'b6',
        src: '/rustic-grey-oak-front-100x100.jpg',
        name: 'Akupanel | 60 – Klassiek Eiken (Grijs Vilt)',
        price: 130,
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
    content: [
      'Duurzame materialen',
      'Gereeyeled vilt',
      'Geluidsabsorerend (%85)',
      'Goede kwaliteit',
      'Betere akoestiek',
    ],
  },
];
