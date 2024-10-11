export interface IconProps {
    color: string;
    className?: string;
}

export interface Project {
    id: string;
    title: string;
    description: string;
    link: string;
    techStack: string[];
    image: string;
}
