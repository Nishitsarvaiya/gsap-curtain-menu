import Head from 'next/head';

export async function getStaticProps() {
	return {
		props: {},
	};
}

export default function Projects() {
	return (
		<div className='page-wrapper'>
			<Head>
				<title>Create Next App</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<div className='container'>
				<main>
					<h1 className='quote-title'>Projects</h1>
					<div className='quote'>
						A long descriptive name is better than a short enigmatic name. A long descriptive name is better
						than a long descriptive comment.
					</div>
				</main>
			</div>
		</div>
	);
}
