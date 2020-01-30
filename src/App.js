import React from 'react';
import io from 'socket.io-client';
import { Container, Row } from 'reactstrap';

import Header from './components/Header';
import Visitors from './components/Visitors';

class App extends React.Component {
	render() {
		const socket = io('http://localhost:5000');
		return (
			<React.Fragment>
				<Header />
				<Container>
					<Row>
						<Visitors />
					</Row>
				</Container>
			</React.Fragment>
		);
	}
}

export default App;
