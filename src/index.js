import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from './context/ThemeContext';
import RecipesContextProvider from './context/RecipesContext';

ReactDOM.render(
	<React.StrictMode>
		<RecipesContextProvider>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</RecipesContextProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
