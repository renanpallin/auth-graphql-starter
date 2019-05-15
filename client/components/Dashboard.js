import React from 'react';
import requireAuth from './requireAuth.js';

const Dashboard = props => <h1>You're logged in!</h1>;

export default requireAuth(Dashboard);
