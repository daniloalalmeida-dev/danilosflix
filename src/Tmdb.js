/* eslint-disable import/no-anonymous-default-export */
//import env from "react-dotenv";

//const API_KEY = env.API_KEY;
//const API_BASE_URL = env.API_BASE_URL;

const API_KEY = 'd7f7161ac12bda1962744e6fe7ef4e1b';
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
				title: 'Originais Netflix',
				items: await basicFetch(
					`discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`
				),
			},
			{
				slug: 'trending',
				title: 'Recomendados para você',
				items: await basicFetch(
					`trending/all/week?language=pt-BR&api_key=${API_KEY}`
				),
			},
			{
				slug: 'toprated',
				title: 'Em Alta',
				items: await basicFetch(
					`movie/top_rated?language=pt-BR&api_key=${API_KEY}`
				),
			},
			{
				slug: 'action',
				title: 'Ação',
				items: await basicFetch(
					`discover/movie/?api_key=${API_KEY}&language=pt-BR&with_genres=28`
				),
			},
			{
				slug: 'comedy',
				title: 'Comédia',
				items: await basicFetch(
					`discover/movie/?api_key=${API_KEY}&language=pt-BR&with_genres=35`
				),
			},
			{
				slug: 'horror',
				title: 'Terror',
				items: await basicFetch(
					`discover/movie/?api_key=${API_KEY}&language=pt-BR&with_genres=27`
				),
			},
			{
				slug: 'romance',
				title: 'Romance',
				items: await basicFetch(
					`discover/movie/?api_key=${API_KEY}&language=pt-BR&with_genres=10749`
				),
			},
			{
				slug: 'documentary',
				title: 'Documentários',
				items: await basicFetch(
					`discover/movie/?api_key=${API_KEY}&language=pt-BR&with_genres=99`
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
						`movie/${movieId}?api_key=${API_KEY}&language=pt-BR`
					);
					break;

				case 'tv':
					info = await basicFetch(
						`tv/${movieId}?api_key=${API_KEY}&language=pt-BR`
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
