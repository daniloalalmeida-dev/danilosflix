require('dotenv').config();

const API_KEY = process.env.API_KEY;
const API_BASE = process.env.API_BASE;

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

export default {
	getHomeList: async () => {
		return [
			{
				slug: 'originals',
				title: 'Originais Netflix',
				items: [],
			},
			{
				slug: 'trending',
				title: 'Recomendados para você',
				items: [],
			},
			{
				slug: 'toprated',
				title: 'Em Alta',
				items: [],
			},
			{
				slug: 'action',
				title: 'Ação',
				items: [],
			},
			{
				slug: 'comedy',
				title: 'Comédia',
				items: [],
			},
			{
				slug: 'horror',
				title: 'Terror',
				items: [],
			},
			{
				slug: 'romance',
				title: 'Romance',
				items: [],
			},
			{
				slug: 'documentary',
				title: 'Documentários',
				items: [],
			},
		];
	},
};
