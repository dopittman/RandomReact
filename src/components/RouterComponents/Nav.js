import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {PageOne} from './pages/PageOne';
import {PageTwo} from './pages/PageTwo';


const Nav = () => {
  return (
    <Router>
    <div className='nav-div'>
    <h2>React Router Widget</h2><hr />
      <Link to='/routeone'><li className='nav-link'>Open Page One</li></Link>
      <Link to='/routetwo'><li className='nav-link'>Open Page Two</li></Link>
      <div className='nav-content'>
    <Switch>
      <Route path='/routeone' exact component={PageOne}/>
      <Route path='/routetwo' exact component={PageTwo}/>
    </Switch>
    </div>
    </div>
    </Router>
  )
}

export default Nav;