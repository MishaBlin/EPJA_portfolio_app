// @ts-expect-error ну тут буквально эни....
export const fetcher = (...args) =>
    fetch(...args)
        .then((res) => res.json())
        .then((data) => data.data);
