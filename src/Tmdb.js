/* eslint-disable import/no-anonymous-default-export */

const API_KEY = 'yourApiKeyHere';
const API_BASE_URL = 'https://api.themoviedb.org/3/';

const basicFetch = async (endpoint) => {
	const req = await fetch(`${API_BASE_URL}${endpoint}`);
	const json = await req.json();
	return json;
};

export default {
	getHomeList: async () => {
		return [
			{
				slug: 'originals',
				title: 'Only on Daniloflix',
				items: await basicFetch(
					`discover/tv?with_network=213&language=en-US&api_key=${API_KEY}`
				),
			},
			{
				slug: 'trending',
				title: 'Trending Now',
				items: await basicFetch(
					`trending/all/week?language=en-US&api_key=${API_KEY}`
				),
			},
			{
				slug: 'toprated',
				title: 'Popular on Daniloflix',
				items: await basicFetch(
					`movie/top_rated?language=en-US&api_key=${API_KEY}`
				),
			},
			{
				slug: 'action',
				title: 'Action',
				items: await basicFetch(
					`discover/movie/?api_key=${API_KEY}&language=en-US&with_genres=28`
				),
			},
			{
				slug: 'comedy',
				title: 'Comedies',
				items: await basicFetch(
					`discover/movie/?api_key=${API_KEY}&language=en-US&with_genres=35`
				),
			},
			{
				slug: 'horror',
				title: 'Horror',
				items: await basicFetch(
					`discover/movie/?api_key=${API_KEY}&language=en-US&with_genres=27`
				),
			},
			{
				slug: 'romance',
				title: 'Drama',
				items: await basicFetch(
					`discover/movie/?api_key=${API_KEY}&language=en-US&with_genres=10749`
				),
			},
			{
				slug: 'documentary',
				title: 'Documentaries',
				items: await basicFetch(
					`discover/movie/?api_key=${API_KEY}&language=en-US&with_genres=99`
				),
			},
		];
	},
	getMovieInfo: async (movieId, type) => {
		let info = {};

		if (movieId) {
			switch (type) {
				case 'movie':
					info = await basicFetch(
						`movie/${movieId}?api_key=${API_KEY}&language=en-US`
					);
					break;

				case 'tv':
					info = await basicFetch(
						`tv/${movieId}?api_key=${API_KEY}&language=en-US`
					);
					break;

				default:
					info = console.log('Data not found');
					break;
			}
		}
		return info;
	},
};
