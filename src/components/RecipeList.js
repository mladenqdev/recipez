import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import { projectFirestore } from '../firebase/config';

import deleteBin from '../assets/delete-bin.svg';

import './RecipeList.css';

export default function RecipeList({ recipes }) {
	const { mode, color } = useTheme();

	if (recipes.length === 0) {
		return <div className="error">No recipes to load...</div>;
	}

	const handleDelete = (id) => {
		projectFirestore.collection('recipes').doc(id).delete();
	};

	return (
		<div className="recipe-list">
			{recipes.map((recipe) => (
				<div key={recipe.id} className={`card ${mode}`} style={{ boxShadow: `4px 3px 13px ${color}` }}>
					<h3>{recipe.title}</h3>
					<p>{recipe.cookingTime} to make.</p>
					<div>{recipe.method.substring(0, 100)}...</div>
					<Link to={`/recipe/${recipe.id}`} className="btn btn-effect">
						Cook This
					</Link>

					<img className="delete" src={deleteBin} alt="delete bin" onClick={() => handleDelete(recipe.id)} />
				</div>
			))}
		</div>
	);
}
