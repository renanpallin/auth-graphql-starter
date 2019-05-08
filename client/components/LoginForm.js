import React from 'react';
import AuthForm from './AuthForm';

import mutation from '../mutations/Login';
import query from '../queries/CurrentUser'
import { graphql } from 'react-apollo';

class LoginForm extends React.Component {
	onSubmit({ email, password }) {
		this.props.mutate({
			variables: { email, password },
			refetchQueries: [{ query }]
		});
	}

	render() {
		return (
			<div>
				<h3>Login Form</h3>
				<AuthForm onSubmit={this.onSubmit.bind(this)} />
			</div>
		);
	}
}

export default graphql(mutation)(LoginForm);
