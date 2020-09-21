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

const Dashboard = () => {
  return (
    <Router>
      <Header />
<<<<<<< HEAD
=======
      <Route path="/signup" component={() => <SignUpComponent />} />
      <Route path="/login" component={() => <Login />} />
>>>>>>> 8948f111e8edc8b32ed585a9124900ad249902ff
    </Router>
  );
};

export default Dashboard;