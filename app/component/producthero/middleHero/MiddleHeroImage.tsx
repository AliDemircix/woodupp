import Image from 'next/image';

interface MiddleHeroImageProps {
    img: { src: string; alt: string };
}

export function MiddleHeroImage({ img }: MiddleHeroImageProps) {
    return <Image src={img.src} alt={img.alt} fill objectFit="fill" />;
}
