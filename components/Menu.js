import gsap from 'gsap';
import Link from 'next/link';
import { useContext, useEffect, useRef } from 'react';
import { MenuContext } from '../context/MenuContextProvider';

const Menu = () => {
	const { clicked, initial } = useContext(MenuContext);
	const menuRef = useRef(null);

	const staggerReveal = (node1, node2) => {
		gsap.fromTo(
			[node1, node2],
			{
				height: 0,
				skewY: 2,
			},
			{
				duration: 1,
				height: '100%',
				transformOrigin: 'right top',
				skewY: 0,
				ease: 'expo.inOut',
				stagger: {
					amount: 0.1,
				},
			}
		);
	};

	const staggerRevealClose = (node1, node2) => {
		gsap.to([node1, node2], {
			duration: 1,
			height: 0,
			ease: 'expo.inOut',
			stagger: {
				amount: 0.08,
			},
		});
	};

	const staggerText = (node) => {
		gsap.fromTo(
			node,
			{ y: '100%' },
			{
				duration: 0.8,
				y: 0,
				delay: 0.2,
				ease: 'expo.inOut',
				stagger: {
					amount: 0.1,
				},
			}
		);
	};

	const staggerTextExit = (node) => {
		gsap.fromTo(
			node,
			{ y: 0 },
			{
				duration: 0.8,
				y: '-100%',
				ease: 'expo.inOut',
				stagger: {
					amount: 0.05,
				},
			}
		);
	};

	const fadeInUp = (node, stagger) => {
		gsap.fromTo(
			node,
			{ y: 60, autoAlpha: 0 },
			{
				y: 0,
				duration: 1,
				delay: 0.2,
				autoAlpha: 1,
				ease: 'expo.inOut',
				stagger: stagger ? 0.05 : 0,
			}
		);
	};

	const fadeInUpExit = (node, stagger) => {
		gsap.fromTo(
			node,
			{ y: 0, autoAlpha: 1 },
			{
				y: -60,
				duration: 0.8,
				autoAlpha: 0,
				ease: 'expo.inOut',
				stagger: stagger ? 0.05 : 0,
			}
		);
	};

	const handleHover = (e) => {
		console.log(e.target);
		gsap.to(e.target, {
			duration: 0.3,
			y: -3,
			skewX: -4,
			ease: 'power1.inOut',
		});
	};

	const handleHoverExit = (e) => {
		gsap.to(e.target, {
			duration: 0.3,
			y: 3,
			skewX: 0,
			ease: 'power1.inOut',
		});
	};

	// adds city image once you hover on
	const handleCity = (city, target) => {
		gsap.to(target, {
			duration: 0,
			background: `url(${city}) center center`,
		});
		gsap.to(target, {
			duration: 0.4,
			opacity: 1,
			ease: 'power3.inOut',
		});
		gsap.from(target, {
			duration: 0.4,
			skewY: 2,
			transformOrigin: 'right top',
		});
	};

	// Removes the city image once you hover off
	const handleCityReturn = (target) => {
		gsap.to(target, {
			duration: 0,
			skewY: 0,
		});
		gsap.to(target, {
			duration: 0.4,
			opacity: 0,
			skewY: 0,
		});
	};

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
	}, [clicked, initial]);

	return (
		<div className='menu-wrapper' ref={menuRef}>
			<div className='menu-secondary-layer' data-menu-layer></div>
			<div className='menu-primary-layer' data-menu-layer>
				<div className='menu-background'></div>
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
							<div className='location'>Switzerland</div>
							<div className='location'>Tokyo</div>
							<div className='location'>London</div>
							<div className='location'>Amsterdam</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Menu;
