import { createContext, useState, useEffect } from 'react';
import { projectFirestore } from '../firebase/config';

export const RecipesContext = createContext();

const RecipesContextProvider = (props) => {
	const [recipes, setRecipes] = useState([]);

	const [isPending, setIsPending] = useState(false);
	const [error, setError] = useState(null);

	const [searchTitle, setSearchTitle] = useState('');

	useEffect(() => {
		setIsPending(true);

		const unsub = projectFirestore.collection('recipes').onSnapshot(
			(snapshot) => {
				if (snapshot.empty) {
					setError('No recipes to load');
					setIsPending(false);
				} else {
					let results = [];
					snapshot.docs.forEach((doc) => {
						results.push({ ...doc.data(), id: doc.id });
					});
					setRecipes(results);
					setIsPending(false);
				}
			},
			(err) => {
				setError(err.message);
				setIsPending(false);
			}
		);

		return () => unsub();
	}, []);

	const addRecipe = (title, ingredients, method, cookingTime) => {
		const collectionRef = projectFirestore.collection('recipes');

		collectionRef.add({
			title: title,
			ingredients: ingredients,
			method: method,
			cookingTime: cookingTime,
		});
	};

	const value = {
		isPending,
		error,
		recipes,
		addRecipe,
		searchTitle,
		setSearchTitle,
	};

	return <RecipesContext.Provider value={value}>{props.children}</RecipesContext.Provider>;
};

export default RecipesContextProvider;
