import React from 'react';
import './Header.css';

export default function headerFunc({ blackOrNot }) {
	return (
		<header className={blackOrNot ? 'black' : 'linearBlack'}>
			<div className='header--logo'>
				<a href='/'>
					<img src='assets/daniloflix_logo.png' alt='daniloflix-logo' />
				</a>
				<div className='menu--list'>
			<ul className='tabbed-primary-navigation'>
					<li className='navigation-tab'>
						<a className='current active' href='/browse'><strong>
							Home
							</strong></a>
					</li>
					<li className='navigation-tab'>
						<a href='/browse/genre/83'>TV Shows</a>
					</li>
					<li className='navigation-tab'>
						<a href='/browse/genre/34399'>Movies</a>
					</li>
					<li className='navigation-tab'>
						<a href='/latest'>New &amp; Popular</a>
					</li>
					<li className='navigation-tab'>
						<a href='/browse/my-list'>My List</a>
					</li>
				</ul>
				</div>
			</div>
			
			<div className='header--user'>
				<a href='/'>
					<img src='assets/avatar1.png' alt='userAvatar' />
				</a>
			</div>
		</header>
	);
}
