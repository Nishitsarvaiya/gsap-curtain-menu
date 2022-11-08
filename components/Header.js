import Hamburger from './Hamburger';
import Link from 'next/link';

const Header = () => {
	return (
		<header>
			<div className='container'>
				<div className='header-wrapper'>
					<div className='logo-wrapper'>
						<div className='logo'>
							<Link href='/'>GSAP Curtain Menu</Link>
						</div>
					</div>
					<Hamburger />
				</div>
			</div>
		</header>
	);
};

export default Header;
