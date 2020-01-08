import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch, useRouteMatch, useParams} from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './components/Home/Home';
import UserDashboard from './components/Home/UserDashboard';
import ChatScreen from './components/ChatScreen/ChatScreen';


function App() {
  return (
    <div className="h-100 app"> 
    <Router>
      <Switch>
        <Route path="/index" component={Home}></Route>
      <Route path="" component={ChatScreen}></Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
