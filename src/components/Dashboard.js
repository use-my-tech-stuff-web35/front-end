import React from "react";
import * as yup from "yup";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Header from "./Header";
import SignUpComponent from "./SignUpComponent";
import Login from "./Login";
import formSchema from "./formSchema";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import TechRentalList from "./TechRentalList";
import AddNewTech from "./AddNewTech";
import EditTechItem from "./EditTechItem";
// import SignUpFormComponent from "./SignUpFormComponent";

const Dashboard = () => {
  return (
    <Router>
      <Header />
      <Route path="/signup" component={() => <SignUpComponent />} />
    </Router>
  );
};

export default Dashboard;
