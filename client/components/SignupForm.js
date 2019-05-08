import React from 'react';
import AuthForm from './AuthForm';

import mutation from '../mutations/Signup';
import query from '../queries/CurrentUser';
import { graphql } from 'react-apollo';

class SignupForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			errors: [],
		};
	}

	onSubmit({ email, password }) {
		this.props
			.mutate({
				variables: { email, password },
				refetchQueries: [{ query }],
			})
			.catch(res => {
				const errors = res.graphQLErrors.map(error => error.message);
				this.setState({ errors });
			});
	}

	render() {
		return (
			<div>
				<h3>Signup Form</h3>
				<AuthForm
					onSubmit={this.onSubmit.bind(this)}
					errors={this.state.errors}
				/>
			</div>
		);
	}
}

export default graphql(mutation)(SignupForm);
