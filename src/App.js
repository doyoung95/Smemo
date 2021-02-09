import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MemoPage from './pages/MemoPage';
import TodoPage from './pages/TodoPage';
import WritePage from './pages/WritePage';
import Nav from './components/Nav';
function App() {
	return (
		<Router>
			<Nav />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/write" component={WritePage} />
				<Route exact path="/todo" component={TodoPage} />
				<Route exact path="/memo" component={MemoPage} />
			</Switch>
		</Router>
	);
}

export default App;
