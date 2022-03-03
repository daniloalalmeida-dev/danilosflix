import React from 'react';
import './Footer.css';

export default function FooterFunc() {
	return (
		<footer>
			<div className='footerInfos'>
				Desenvolvido a título de estudo por:{' '}
				<a
					href='https://www.linkedin.com/in/danilo-alcidinei-almeida-b758b870/'
					target={'_blank'}
					rel='noreferrer'
				>
					Danilo Almeida
				</a>
				<br />
				Todos os direitos de estilo e imagem para{' '}
				<a href='https://netflix.com/' target={'_blank'} rel='noreferrer'>
					Netflix Inc.
				</a>
				<br />
				Dados dos filmes e imagens consumidos da API:{' '}
				<a
					href='https://www.themoviedb.org/'
					target={'_blank'}
					rel='noreferrer'
				>
					Tmdb
				</a>
			</div>
		</footer>
	);
}
