import React from 'react';
import './Header.css';

export default function headerFunc({blackOrNot}) {
	return (
		<header className={blackOrNot ? 'black' : 'linearBlack'}>
			<div className='header--logo'>
				<a href='/'>
					<img src='assets/daniloflix_logo.png' alt='daniloflix-logo' />
				</a>
			</div>
			<div className='header--user'>
				<a href='/'>
					<img src='assets/avatar1.png' alt='userAvatar' />
				</a>
			</div>
		</header>
	);
}
