import React, { Component } from 'react';
import './App.css';
import "./materialize/css/materialize.css";
import Header from './components/Header';
import Main from './components/MainPart';

class App extends Component {
	render() {
		return (
			<div>
				<Header>1</Header>
					<Main>1</Main>
			</div>
		);
	}
}

export default App;
