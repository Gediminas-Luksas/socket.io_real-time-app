import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavbarText } from 'reactstrap';

class Header extends React.Component {
	state = {
		isOpen: false,
	};

	toggle = () => {
		this.setState({
			isOpen: !this.state.isOpen,
		});
	};
	render() {
		return (
			<div>
				<Navbar color="light" light expand="md">
					<NavbarBrand href="/">Messaging</NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.isOpen} navbar>
						<Nav className="mr-auto" navbar />
						<NavbarText>Simple Text</NavbarText>
					</Collapse>
				</Navbar>
			</div>
		);
	}
}
export default Header;
