import React from 'react';
import { graphql } from 'react-apollo';

import currentUserQuery from '../queries/CurrentUser';
import { hashHistory } from 'react-router';

const requireAuth = WrappedComponent => {
	class RequireAuth extends React.Component {
		componentWillUpdate(nextProps) {
			if (!nextProps.data.loading && !nextProps.data.user) {
				hashHistory.push('/login');
			}
		}

		render() {
			return <WrappedComponent {...this.props} />
		}
	}

	return graphql(currentUserQuery)(RequireAuth);
};

export default requireAuth;