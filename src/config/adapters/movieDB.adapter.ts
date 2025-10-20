import { AxiosAdapter } from './http/axios.adapter';

export const movieDBFetcher = new AxiosAdapter({
    baseUrl: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: 'ccb8d10d990164576b2e5ceb6f2d26b0',
        language: 'es'
    }
});