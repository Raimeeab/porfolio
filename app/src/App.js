import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";

import "./App.css";

function App() {
  return (
    <div>
      <Router>
      <Header />
        <Switch>
          <Route exact path="/">
            <About />
          </Route>
          <Route path="/projects">
            <h1>Projects to go here</h1>
            {/* <Projects /> */}
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
