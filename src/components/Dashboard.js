import React, { useState, useEffect } from 'react';
/* import * as yup from 'yup';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import Signup from './SignUp';
import Login from './Login';
import formSchema from './formSchema'; */
import { BrowserRouter as Router, Route, Link, useHistory } from 'react-router-dom';
/* import PrivateRoute from './PrivateRoute';
import TechRentalList from './TechRentalList';
import AddNewTech from './AddNewTech';
import EditTechItem from './EditTechItem'; */
import Header from './Header';

const Dashboard = (props) => {

    return (
        <Router>
			<Header />
        </Router>
    )
}

export default Dashboard
