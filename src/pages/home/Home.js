import { useContext } from 'react';
import { RecipesContext } from '../../context/RecipesContext';

import './Home.css';

import RecipeList from '../../components/RecipeList';

export default function Home() {
	const { searchTitle, isPending, error, recipes } = useContext(RecipesContext);

	const recipesFiltered = recipes.filter((recipe) => recipe.title.toLocaleLowerCase().includes(searchTitle));

	return (
		<div className="home">
			{error && <p className="home">{error}</p>}
			{isPending && <p className="loading">Loading...</p>}
			{recipes && <RecipeList recipes={recipesFiltered} />}
		</div>
	);
}
