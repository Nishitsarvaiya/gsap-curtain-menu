import gsap from 'gsap';
import Link from 'next/link';
import { useContext, useEffect, useRef, useState } from 'react';
import { MenuContext } from '../context/MenuContextProvider';
import useAnimations from '../hooks/useAnimations';
import paris from '../assets/images/paris.jpg';
import amsterdam from '../assets/images/amsterdam.jpg';
import sanfransisco from '../assets/images/san-fransisco.jpg';
import toronto from '../assets/images/toronto.jpg';

const cities = [
	{ name: 'Paris', image: paris.src },
	{ name: 'Amsterdam', image: amsterdam.src },
	{ name: 'San Fransisco', image: sanfransisco.src },
	{ name: 'Toronto', image: toronto.src },
];

const Menu = () => {
	const { clicked, initial } = useContext(MenuContext);
	const {
		staggerReveal,
		staggerRevealClose,
		staggerText,
		staggerTextExit,
		fadeInUp,
		fadeInUpExit,
		handleHover,
		handleHoverExit,
	} = useAnimations();
	const menuRef = useRef(null);
	const cityBgWrapperRef = useRef(null);
	const cityBgRef = useRef(null);

	function handleCityEnter(image) {
		console.log(image);
		gsap.set(cityBgRef.current, { backgroundImage: `url('${image}')` });
		gsap.to(cityBgWrapperRef.current, { opacity: 1, duration: 0.5, ease: 'power3.out' });
	}

	useEffect(() => {
		const locations = document.querySelectorAll('.location');

		function handleCityMove(e) {
			const { offsetX: x, offsetY: y } = e;
			const { offsetWidth: width, offsetHeight: height } = this;

			const amount = 10;
			const currentX = (x / width) * (amount * 2) - amount;
			const currentY = (y / height) * (amount * 2) - amount;

			gsap.to(cityBgRef.current, { x: currentX, y: currentY, duration: 1.5, ease: 'power3.out' });
		}

		function handleCityExit(e) {
			gsap.to(cityBgWrapperRef.current, { opacity: 0, duration: 0.5, ease: 'power3.out' });
			gsap.to(cityBgRef.current, { x: 0, y: 0, duration: 1.5, ease: 'power3.out' });
		}

		locations.forEach((loc) => {
			loc.addEventListener('mousemove', handleCityMove);
			loc.addEventListener('mouseleave', handleCityExit);
		});

		return () => {
			locations.forEach((loc) => {
				loc.removeEventListener('mousemove', null);
				loc.removeEventListener('mouseleave', null);
			});
		};
	}, []);

	useEffect(() => {
		if (!clicked) {
			// close menu
			staggerTextExit('.nav-list--item__inner');
			fadeInUpExit('.nav-info--text');
			fadeInUpExit('.location');
			staggerRevealClose('.menu-primary-layer', '.menu-secondary-layer');
			gsap.set(menuRef.current, { display: 'none', delay: 1 });
		} else if (clicked || (clicked && initial === null)) {
			// open menu
			gsap.set(menuRef.current, { display: 'block' });
			staggerReveal('.menu-secondary-layer', '.menu-primary-layer');
			fadeInUp('.nav-info--text');
			staggerText('.nav-list--item__inner');
			fadeInUp('.location', true);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [clicked]);

	return (
		<div className='menu-wrapper' ref={menuRef}>
			<div className='menu-secondary-layer' data-menu-layer></div>
			<div className='menu-primary-layer' data-menu-layer>
				<div className='menu-background' ref={cityBgWrapperRef}>
					<div className='background' ref={cityBgRef}></div>
				</div>
				<div className='container'>
					<div className='menu'>
						<nav className='nav'>
							<ul className='nav-list'>
								<li className='nav-list--item'>
									<div className='nav-list--item__inner'>
										<Link
											href='/projects'
											onMouseEnter={(e) => handleHover(e)}
											onMouseOut={(e) => handleHoverExit(e)}>
											Projects
										</Link>
									</div>
								</li>
								<li className='nav-list--item'>
									<div className='nav-list--item__inner'>
										<Link
											href='/about'
											onMouseEnter={(e) => handleHover(e)}
											onMouseOut={(e) => handleHoverExit(e)}>
											About
										</Link>
									</div>
								</li>
								<li className='nav-list--item'>
									<div className='nav-list--item__inner'>
										<Link
											href='/contact'
											onMouseEnter={(e) => handleHover(e)}
											onMouseOut={(e) => handleHoverExit(e)}>
											Contact Us
										</Link>
									</div>
								</li>
							</ul>
						</nav>
						<div className='nav-info'>
							{/* <div className='nav-info--title'>Coding</div> */}
							<p className='nav-info--text'>
								“Any fool can write code that a computer can understand. Good programmers write code
								that humans can understand.”
								<br /> – Martin Fowler
							</p>
						</div>
					</div>
					<div className='locations-wrapper'>
						<div className='locations'>
							{cities.map((city, idx) => (
								<div className='location' key={idx} onMouseEnter={() => handleCityEnter(city.image)}>
									<span>{city.name}</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Menu;
