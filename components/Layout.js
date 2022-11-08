import MenuContextProvider from '../context/MenuContextProvider';
import Header from './Header';
import Menu from './Menu';

const Layout = ({ children }) => {
	return (
		<MenuContextProvider>
			<div className='layout-container'>
				<Header />
				{children}
				<Menu />
			</div>
		</MenuContextProvider>
	);
};

export default Layout;
