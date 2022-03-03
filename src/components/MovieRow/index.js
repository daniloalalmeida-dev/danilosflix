import { NavigateBefore, NavigateNext } from '@material-ui/icons';
import React, { useState } from 'react';
import './MovieRow.css';

export default function MovieRowFunc({ title, items }) {
	const [scrollX, setScrollX] = useState(-800);

	const handleLeftArrow = () => {
		let scrollValue = scrollX + Math.round(window.innerWidth / 2);
		if (scrollValue > 0) {
			scrollValue = 0;
		}
		setScrollX(scrollValue);
	};

	const handleRightArrow = () => {
		let scrollValue = scrollX - Math.round(window.innerWidth / 2);
		let listWidth = items.results.length * 150;

		if ((window.innerWidth - listWidth) > scrollValue) {
			scrollValue = (window.innerWidth - listWidth) - 60;
		}
		setScrollX(scrollValue);
	};

	return (
		<div className='movieRow'>
			<h2>{title}</h2>
			<div className='movieRow--left' onClick={handleLeftArrow}>
				<NavigateBefore style={{ fontSize: 50 }} />
			</div>
			<div className='movieRow--right' onClick={handleRightArrow}>
				<NavigateNext style={{ fontSize: 50 }} />
			</div>
			<div className='movieRow--listarea'>
				<div
					className='movieRow--list'
					style={{
						marginLeft: scrollX,
						width: items.results.length * 150,
					}}
				>
					{items.results.length > 0 &&
						items.results.map((item, key) => (
							<div key={key} className='movieRow--item'>
								<img
									src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
									alt={item.original_title}
								/>
							</div>
						))}
				</div>
			</div>
		</div>
	);
}
