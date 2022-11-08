import { createContext, useState } from 'react';

export const MenuContext = createContext(null);

const MenuContextProvider = ({ children }) => {
	const [initial, setInitial] = useState(false);
	const [clicked, setClicked] = useState(null);
	const [menuLabel, setMenuLabel] = useState('Menu');
	return (
		<MenuContext.Provider value={{ initial, clicked, menuLabel, setInitial, setClicked, setMenuLabel }}>
			{children}
		</MenuContext.Provider>
	);
};

export default MenuContextProvider;
