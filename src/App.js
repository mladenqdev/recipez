import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import Create from './pages/create/Create';
import Search from './pages/search/Search';
import Recipe from './pages/recipe/Recipe';

import './App.css';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/create">
						<Create />
					</Route>
					<Route path="/search">
						<Search />
					</Route>
					<Route path="/recipe/:id">
						<Recipe />
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
