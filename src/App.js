import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home';

import Photodetail from './pages/Photodetail';

import Videos from './pages/Videos';
import About from './pages/About';
import Contact from './pages/Contact';


function App() {
  return (
    <div className="App">
<Router>
<Routes>
<Route index path="/"  exact element={<Home />} />
<Route path='/about' element={<About />} />
<Route path="/photodetail" element={<Photodetail />}/>

<Route path="/video" element={<Videos />}/>
<Route path="/contact" element={<Contact />}/>

</Routes>


</Router>


    </div>
  );
}

export default App;
