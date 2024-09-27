import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function ny(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function numberStars(num: number): string {
    if (num === 1) return 'star';

    return 'stars';
}
