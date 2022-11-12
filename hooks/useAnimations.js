import gsap from 'gsap';

const useAnimations = () => {
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

	return {
		staggerReveal,
		staggerRevealClose,
		staggerText,
		staggerTextExit,
		handleHover,
		handleHoverExit,
		fadeInUp,
		fadeInUpExit,
	};
};

export default useAnimations;
