import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

import './Navbar.css';

import SearchBar from './SearchBar';

export default function Navbar() {
	const { color } = useTheme();

	return (
		<div className="navbar" style={{ background: color }}>
			<nav>
				<Link to="/" className="brand">
					<h1 className="navbar-title">Recipez</h1>
				</Link>
				<div className="navbar-right">
					<SearchBar />
					<Link className="navbar-btn" to="/create">
						Create Recipe
					</Link>
				</div>
			</nav>
		</div>
	);
}
