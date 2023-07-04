export const CLIENT_URL = process.env.NODE_ENV === 'production' ? 'https://kmwloftladders.co.uk' : 'http://localhost:3000';

export function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}