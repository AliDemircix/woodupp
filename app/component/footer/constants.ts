import { email, weekendHours, weeklyHours } from '@/app/lib/contact-info/constants';

export const contact = {
    title: 'Contact',
    tel: '+31 6 12312312',
    email: email,
    openTimes: weeklyHours + ' ' + weekendHours,
    countries: [
        { countryCode: 'NL', countryName: 'Netherlands', region: 'Europe' },
        { countryCode: 'TR', countryName: 'Turkey', region: 'Europe' },
        { countryCode: 'BG', countryName: 'Belgium', region: 'Americas' },
        { countryCode: 'DE', countryName: 'Deutschland', region: 'Africa' },
    ],
};

export const overWoodUpp = {
    title: 'Over WoodUpp',
    links: [{ title: 'Kleurstalen', link: '/kleurstalen' }],
};

export const klantenService = {
    title: 'Klantenservice',
    links: [
        { title: 'Contact', link: '/contact' },
        { title: 'Installatie instructies', link: '/montage' },
        { title: 'FAQ', link: '/vaakgestelde-vragen-en-antworden' },
    ],
};
