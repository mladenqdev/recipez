import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { projectFirestore } from '../../firebase/config';

import { useTheme } from '../../hooks/useTheme';

import './Recipe.css';

export default function Recipe() {
	const [recipe, setRecipe] = useState(null);
	const [isPending, setIsPending] = useState(false);
	const [error, setError] = useState(null);

	const { mode, color } = useTheme();
	const { id } = useParams();

	useEffect(() => {
		setIsPending(true);

		const unsub = projectFirestore
			.collection('recipes')
			.doc(id)
			.onSnapshot((doc) => {
				if (doc.exists) {
					setIsPending(false);
					setRecipe(doc.data());
				} else {
					setIsPending(false);
					setError('Could not find that recipe...');
				}
			});

		return () => unsub();
	}, [id]);

	return (
		<div className={`recipe ${mode}`} style={{ boxShadow: `4px 3px 13px ${color}` }}>
			{error && <p className="error">{error}</p>}
			{isPending && <p className="loading">Loading...</p>}
			{recipe && (
				<>
					<h2 className="page-title">{recipe.title}</h2>
					<p className="recipe-time">Takes {recipe.cookingTime} to cook.</p>
					<ul>
						{recipe.ingredients.map((ing) => (
							<li key={ing}>{ing}</li>
						))}
					</ul>
					<p className="method">{recipe.method}</p>
				</>
			)}
		</div>
	);
}
