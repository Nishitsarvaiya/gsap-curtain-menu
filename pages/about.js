import Head from 'next/head';

export async function getStaticProps() {
	return {
		props: {},
	};
}

export default function About() {
	return (
		<div className='page-wrapper'>
			<Head>
				<title>Create Next App</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<div className='container'>
				<main>
					<h1 className='quote-title'>About</h1>
					<div className='quote'>
						Always code as if the guy who ends up maintaining your code will be a violent psychopath who
						knows where you live.
					</div>
				</main>
			</div>
		</div>
	);
}
