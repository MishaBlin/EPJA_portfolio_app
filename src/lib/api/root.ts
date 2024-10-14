export const fetcher = (...args) =>
    // @ts-expect-error ну тут буквально эни....
    fetch(...args)
        .then((res) => res.json())
        .then((data) => data.data);
