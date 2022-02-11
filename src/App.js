import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects"  element={<Projects />}/>
          <Route path="/contact"  element={<Contact />}/ >
          <Route path="/resume" element={<Resume />}/ >
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
