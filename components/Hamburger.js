import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { MenuContext } from '../context/MenuContextProvider';

const Hamburger = () => {
	const { initial, clicked, menuLabel, setInitial, setClicked, setMenuLabel } = useContext(MenuContext);
	const [disabled, setDisabled] = useState(false);
	const router = useRouter();

	const menuToggleHandler = () => {
		disableMenu();
		if (initial == false) {
			setInitial(null);
			setClicked(true);
			setMenuLabel('Close');
		} else if (clicked == true) {
			setClicked(!clicked);
			setMenuLabel('Menu');
		} else if (clicked == false) {
			setClicked(!clicked);
			setMenuLabel('Close');
		}
	};

	const disableMenu = () => {
		setDisabled(true);
		setTimeout(() => {
			setDisabled(false);
		}, 1200);
	};

	useEffect(() => {
		setClicked(false);
		setMenuLabel('Menu');
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [router.asPath]);

	return (
		<button className='hamburger-wrapper' onClick={menuToggleHandler} disabled={disabled}>
			<div className='hamburger'>
				<div></div>
				<div></div>
				<div></div>
			</div>
			<div>{menuLabel}</div>
		</button>
	);
};

export default Hamburger;
