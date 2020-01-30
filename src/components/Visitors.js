import React from 'react';
import axios from 'axios';
import { Table } from 'reactstrap';

class Visitors extends React.Component {
	state = {
		visitors: [],
	};

	componentDidMount() {
		axios.get('http://geoplugin.net/json.gp').then((res) => {
			const {
				geoplugin_request,
				geoplugin_countryCode,
				geoplugin_city,
				geoplugin_region,
				geoplugin_countryName,
			} = res.data;

			const visitor = {
				ip: geoplugin_request,
				countryCode: geoplugin_countryCode,
				city: geoplugin_city,
				state: geoplugin_region,
				country: geoplugin_countryName,
			};
			this.setState({
				visitors: [visitor],
			});
		});
	}

	renderChelper = () => {
		const { visitors } = this.state;
		return visitors.map((visitor, index) => {
			return (
				<tr key={index}>
					<td>{index + 1}</td>
					<td>{visitor.ip}</td>
					<td>{visitor.country}</td>
					<td>{visitor.city}</td>
					<td>{visitor.state}</td>
					<td>{visitor.country}</td>
				</tr>
			);
		});
	};

	render() {
		return (
			<React.Fragment>
				<Table>
					<thead>
						<tr>
							<th>#</th>
							<th>IP</th>
							<th>Flag</th>
							<th>City</th>
							<th>Country</th>
							<th>State</th>
						</tr>
					</thead>
					<tbody>{this.renderChelper()}</tbody>
				</Table>
			</React.Fragment>
		);
	}
}
export default Visitors;
