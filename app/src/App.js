import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/About";

import "./App.css";

function App() {
  return (
    <div>
      <Router>
      <Header />
        <Switch>
          <Route exact path="/">
            <h1>This is an about me</h1>
            <About />
          </Route>
          <Route path="/projects">
            <h1>These are my projects</h1>
            {/* <Projects /> */}
          </Route>
          <Route path="/contact">
            <h1>This is how to contact me</h1>
            {/* <Contact /> */}
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
