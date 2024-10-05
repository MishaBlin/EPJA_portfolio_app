import React, { ReactElement } from 'react';
import { Icons } from '../components/ui/icons';

export const techStack = [
    'React',
    'Next.js',
    'Svelte',
    'SvelteKit',
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'TailwindCSS',
    'Styled-Components',
    'Framer-Motion',
    'shadcn-ui',
    'Ant-Design',
    'ESLint',
    'Prettier',
    'husky',
    'lint-staged',
    'Redux',
    'RTK Query',
    'Tanstack Query',
    'Python',
    'FastApi',
    'Flask',
    'SQLite',
    'PostgreSQL',
    'MongoDB',
    'SQLAlchemy',
    'Alembic',
    'PyPy',
    'poetry',
    'pylint',
    'GitHub Actions',
    'GitLab CI/CD',
    'Docker',
    'Git',
];

export const githubRepo = {
    author: 'MishaBlin',
    repo: 'EPJA_portfolio_app',
};

export const city = {
    name: 'Innopolis',
    href: 'https://ru.wikipedia.org/wiki/Иннополис',
};

interface Nickname {
    default: string;
    colored: string;
}

export const me: Nickname = {
    default: 'cool',
    colored: 'NICKNAME',
};

interface Link {
    href: string;
    title: string;
    icon?: ReactElement;
}

export const navLinks: Link[] = [
    {
        href: '#(about)',
        title: 'About',
    },
    {
        href: '#projects',
        title: 'Projects',
    },
];

export const links: Link[] = [
    {
        href: 'mailto:svyatoslavsvyatkin@yandex.ru',
        title: 'Mail',
        icon: <Icons.mail color="muted-foreground" />,
    },
    {
        href: 'https://t.me/dmhd6219',
        title: 'Telegram',
        icon: <Icons.telegram color="muted-foreground" />,
    },
    {
        href: 'https://github.com/dmhd6219',
        title: 'GitHub',
        icon: <Icons.github color="muted-foreground" />,
    },
    {
        href: 'https://last.fm/user/dmhd',
        title: 'LastFm',
        icon: <Icons.lastFm color="muted-foreground" />,
    },
    {
        href: 'https://pay.cloudtips.ru/p/02da9349',
        title: 'Buy me a coffee',
        icon: <Icons.coffee color="muted-foreground" />,
    },
];
