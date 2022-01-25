import { useContext } from 'react';
import { RecipesContext } from '../context/RecipesContext';

import './SearchBar.css';

export default function SearchBar() {
	const { setSearchTitle } = useContext(RecipesContext);

	return (
		<div className="searchbar">
			<form>
				<label htmlFor="search">Search: </label>
				<input type="text" id="search" onChange={(e) => setSearchTitle(e.target.value)} required />
			</form>
		</div>
	);
}
