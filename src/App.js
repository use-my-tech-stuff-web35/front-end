import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import ItemForm from './components/ItemForm';
import PrivateRoute from './components/PrivateRoute';
import Items from './components/Items';
import ItemDetail from './components/ItemDetail';
import ItemEditForm from './components/ItemEditForm';
import {Switch} from 'react-router';
import './App.css';

function App() {
  return ( 
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component ={Login} />
          <Route exact path="/register" component={Signup} />
          <PrivateRoute exact path='/items/new' component={ItemForm} />
          <PrivateRoute exact path = '/items/:id' component={ItemDetail} />
          <PrivateRoute exact path = '/items/:id/edit' component={ItemEditForm} />
          <PrivateRoute exact path="/items" component={Items} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
