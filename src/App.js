import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch, useRouteMatch, useParams} from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './components/Home/Home';
import UserDashboard from './components/Home/UserDashboard';
import Itinerary from './components/Itinerary/Itinerary';

function App() {
  return (
    <div style={{display:'flex'}}> 
    <Router>
      <Route path="" component={Home}></Route>
      <Route path="" component={Itinerary}></Route>
    </Router>
    </div>
  );
}

export default App;
