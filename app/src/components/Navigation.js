import React from 'react'; 
import Router from 'react-router-dom';

// About me, projects, Contact 

const Navigtation = () => {
    return (
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/contact">Contact Me</Link>
              </li>
            </ul>
    
            {/*
              A <Switch> looks through all its children <Route>
              elements and renders the first one whose path
              matches the current URL. Use a <Switch> any time
              you have multiple routes, but you want only one
              of them to render at a time
            */}
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/projects">
                <About />
              </Route>
              <Route path="/contact">
                <Dashboard />
              </Route>
            </Switch>
          </div>
        </Router>
    )
}