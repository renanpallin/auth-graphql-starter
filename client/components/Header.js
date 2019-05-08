import React from 'react';
import query from '../queries/CurrentUser'
import { graphql } from 'react-apollo';

class Header extends React.Component {
	renderButtons() {
		const { loading, user } = this.props.data
		if (loading) return <div></div>

		if (user) {
			return <div>logout</div>
		}
		return <div>You're not assing in</div>

	}
	render() {
		return <nav>
			<div className="nav-wrapper">{this.renderButtons()}</div>
		</nav>
	}
}

export default graphql(query)(Header);
