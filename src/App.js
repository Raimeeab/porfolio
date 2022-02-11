import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/ProjectCarousel";
import Resume from "./components/Resume/Resume";
import Footer from "./components/Footer/Footer";

// import "./App.css";

function App() {
  return (
    <div>
      <Router basename="/raimee-portfolio">
      {/* <Router basename="/react-portfolio"> */}
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route>
            <Resume exact path="/resume"/>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
