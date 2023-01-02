import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
// import Banner from './components/Banner';
// import { Skills } from './components/Skills';
// import { Projects } from './components/Projects';
// import { Contact } from './components/Contact';
import Footer from './components/Footer';
import YourProj from './components/YourProj';
import Test from './components/test'
import Wishlist from './components/Wishlist';
import Dashboard from './components/Dashboard';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path='/yourproj' element={<YourProj />} />
          <Route exact path='/projects' element={<YourProj />} />
          <Route exact path='/dashboard' element={<Dashboard />} />
          <Route exact path='/wishlist' element={<Wishlist />} />
          <Route exact path='/' element={<Test />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
