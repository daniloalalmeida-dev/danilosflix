import { InfoOutlined, PlayArrow } from '@material-ui/icons';
import React from 'react';
import './featureMovie.css';

export default function featureMovieFunc({ item }) {
	console.log(item);

	let premiereDate = new Date(item.first_air_date);
	let genres = [];
	for (let i in item.genres) {
		genres.push(item.genres[i].name);
	}

	let description = item.overview;
	if(description.length > 250) {
		description = description.substring(0, 250) + '...';
	}

	return (
		<section
			className='featured'
			style={{
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
			}}
		>
			<div className='featured--vertical'>
				<div className='featured--horizontal'>
					<div className='featured--name'>{item.original_name}</div>
					<div className='featured--info'>
						<div className='featured--points'>{item.vote_average} stars</div>
						<div className='featured--year'>{premiereDate.getFullYear()}</div>
						<div className='featured--seasons'>
							{item.number_of_seasons} season
							{item.number_of_seasons !== 1 ? 's' : ''}
						</div>
					</div>
					<div className='featured--description'>{description}</div>
					<div className='featured--buttons'>
						<a className='featured--watchbutton' href={`watch/${item.id}`}>
							<PlayArrow style={{fontSize: 40}}/> Play
						</a>
						<a className='featured--moreInfoButton' href={`list/add/${item.id}`}>
							<InfoOutlined style={{fontSize: 30}}/> More Info
						</a>
					</div>
					<div className='featured--genres'>
						<strong>Genres: </strong>
						{genres.join(', ')}
					</div>
				</div>
			</div>
		</section>
	);
}
