import useSWR from 'swr';

export function useGetApi(url: string, fetcher: (...args: any[]) => any) {
    return useSWR(`/api/cats/get/${url}`, fetcher);
}
