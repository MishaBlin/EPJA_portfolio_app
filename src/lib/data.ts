interface Nickname {
    default: string;
    colored: string;
}

export const me: Nickname = {
    default: 'supercool',
    colored: 'NICKNAME',
};

interface Link {
    href: string;
    title: string;
    icon?: string;
}

export const navLinks: Link[] = [
    {
        href: '#about',
        title: 'About',
    },
    {
        href: '#projects',
        title: 'Projects',
    },
];

export const links: Link[] = [
    {
        href: 'https://t.me/supercoolNICKNAME',
        title: 'Telegram',
    },
    {
        href: 'https://github.com/supercoolNICKNAME',
        title: 'GitHub',
    },
    {
        href: 'https://last.fm/user/supercoolNICKNAME',
        title: 'Last Fm',
    },
    {
        href: 'https://pay.cloudtips.ru/p/02da9349',
        title: 'Buy me a coffee',
    },
];
