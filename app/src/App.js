import Routes from './components/Route';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './components/Navigation';

import './App.css';

function App() {
  return ( 
    <Router>
    <Navigation />
  {/* Route component will show something different based on where you are */}
    <Routes />
    </Router>
  );
}

export default App;
