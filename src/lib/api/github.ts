import axios from 'axios';

export async function fetchGithubStars(githubRepo: {
    author: string;
    repo: string;
}): Promise<number> {
    return (
        await axios.get(
            `https://api.github.com/repos/${githubRepo.author}/${githubRepo.repo}`,
        )
    ).data.stargazers_count;
}
