import React, { useState } from "react";
import Header from "./Header";
import SignUpComponent from "./SignUpComponent";
import Login from "./Login";
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import AddNewTech from "./AddNewTech";
import OrderTechItem from "./OrderTechItem";

const Dashboard = (props) => {

    const [techEquipments, setTechEquipments] = useState([]);
    const history = useHistory();

  return (
    <Router>
      <Header />
      <Route path="/signup" component={() => <SignUpComponent />} />
      <Route path="/login" component={() => <Login history={history} />} />
      <PrivateRoute path="/ordertech" component={() => <OrderTechItem />} />
      <PrivateRoute
				path='/addtech'
				component={() => <AddNewTech history={history} setTechEquipments={setTechEquipments} techEquipments={techEquipments} />}
			/>
			{/* <PrivateRoute
				path='/techlist'
				component={() => <TechRentalList techEquipments={techEquipments} setTechEquipments={setTechEquipments} />}
			/> */}
			
    </Router>
  );
};

export default Dashboard;