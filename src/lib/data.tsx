import React, { ReactElement } from 'react';
import MailIcon from '../components/icons/mail';
import TelegramIcon from '../components/icons/telegram';
import GithubIcon from '../components/icons/github';
import LastFmIcon from '../components/icons/lastfm';
import CoffeeIcon from '../components/icons/coffee';

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
        href: 'mailto:svyatoslavsvyatkin@yandex.ru',
        title: 'Mail',
        icon: <MailIcon color="muted-foreground" />,
    },
    {
        href: 'https://t.me/dmhd6219',
        title: 'Telegram',
        icon: <TelegramIcon color="muted-foreground" />,
    },
    {
        href: 'https://github.com/dmhd6219',
        title: 'GitHub',
        icon: <GithubIcon color="muted-foreground" />,
    },
    {
        href: 'https://last.fm/user/dmhd',
        title: 'LastFm',
        icon: <LastFmIcon color="muted-foreground" />,
    },
    {
        href: 'https://pay.cloudtips.ru/p/02da9349',
        title: 'Buy me a coffee',
        icon: <CoffeeIcon color="muted-foreground" />,
    },
];
