import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';
import { getConfigValue } from '@brojs/cli';

export function useGetApi(url: string, fetcher: (...args: any[]) => any) {
    return useSWR(`${getConfigValue('cats.backend')}/get/${url}`, fetcher);
}

export function usePostApi(url) {
    const { trigger, data, error, isMutating } = useSWRMutation(
        url,
        postFetcher,
    );

    return {
        postData: trigger,
        data,
        error,
        isMutating,
    };
}

async function postFetcher(url, { arg }) {
    const token = localStorage.getItem('cats_token');

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `${token}`,
        },
        body: JSON.stringify(arg),
    });

    if (!response.ok) {
        throw new Error('Failed to make POST request');
    }

    return response.json();
}
