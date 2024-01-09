export type Thumbnail = {
  id: string;
  src: string;
};
export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  images: string[];
  thumbnailImages: Thumbnail[];
};
export const products: Product[] = [
  {
    id: 1,
    name: 'Akupanel | 240',
    description: '',
    price: 130,
    images: [
      '/akupanel-copper-oxide-showcase.jpg',
      '/akupanel-grey-oxide-showcase.jpg',
      '/akupanel-oxide-blue-showcase.jpg',
      '/akupanel-white-oxide-showcase.jpg',
      '/akupanel-charcoal-showcase.jpg',
      '/akupanel-snow-showcase.jpg',
    ],
    thumbnailImages: [
      { id: 'a1', src: '/akupanel-copper-oxide-100x100.jpg.webp' },
      { id: 'a2', src: '/akupanel-grey-oxide-100x100.jpg.webp' },
      { id: 'a3', src: '/akupanel-oxide-blue-100x100.jpg.webp' },
      { id: 'a4', src: '/akupanel-white-oxide-100x100.jpg.webp' },
      { id: 'a5', src: '/akupanel-charcoal-100x100.jpg.webp' },
      { id: 'a6', src: '/akupanel-snow-100x100.jpg.webp' },
    ],
  },
  {
    id: 2,
    name: 'Akupanel | 300 Klassiek Eiken',
    description: '',
    price: 150,
    images: [
      '/akupanel-60-classic-oak-vertical-2048x2048.png.webp',
      '/akupanel-60-classic-oak-vertical-1536x1536.png',
      '/Akupanel60-natural-horisontal.png',
      '/akupanel-60-walnut-vertical-1536x1536.png',
      '/Akupanel60-brown-horisontal.png',
      '/Akupanel60-grey-horisontal.png',
    ],
    thumbnailImages: [
      { id: 'b1', src: '/classic-oak-black-felt-front-100x100.jpg' },
      { id: 'b2', src: '/classic-oak-black-felt-front-100x100.jpg' },
      { id: 'b3', src: '/rustic-natural-oak-front-100x100.jpg' },
      { id: 'b4', src: '/walnut-front-100x100.jpg' },
      { id: 'b5', src: '/rustic-brown-front-100x100.jpg' },
      { id: 'b6', src: '/rustic-grey-oak-front-100x100.jpg' },
    ],
  },
];
