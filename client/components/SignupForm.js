import React from 'react';
import AuthForm from './AuthForm';

import mutation from '../mutations/Signup';
import query from '../queries/CurrentUser';
import { graphql } from 'react-apollo';

import { hashHistory } from 'react-router';

class SignupForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			errors: [],
		};
	}

	componentWillUpdate(nextProps) {
		// Não estava logado e agora está
		if (!this.props.data.user && nextProps.data.user) {
			hashHistory.push('/dashboard');
		}
	}


	onSubmit({ email, password }) {
		this.props
			/*
			Se você colocar um then um then, ele será executado depois da mutation
			NÃO esperand o refetchQueries
			 */
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

export default graphql(query)(graphql(mutation)(SignupForm));
