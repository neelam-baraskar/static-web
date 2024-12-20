import React from "react";
import './App.css';

// import IndusPage from "./components/IndusPage";
// import UttamPage from "./components/UttamPage";



// Import images correctly

import image1 from './img/images (3).jpg';
import image2 from './img/download.jpg';
import image3 from './img/download (1).jpg'; // Add this if you have the indigo.jpg file.
// import image from './img/WhatsApp Image 2024-11-27 at 18.24.46_7695e539.jpg';
import { useNavigate ,Link} from "react-router-dom";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import IndusPage from "./components/IndusPage";
import Home from "./Screen/Home";
import UttamPage from "./components/UttamPage";
import IndigoPaint from "./components/IndigoPaint";
import MapComponent from "./components/Location";
function App() {
  var navigate=useNavigate()

  
  return (
    <div  >
    
        <Routes>
          <Route path="/" element={<Home/> } />
          <Route path="/indus" element={<IndusPage/> } />
          <Route path="/uttam" element={<UttamPage/> } />
          <Route path="/paint" element={<IndigoPaint/> } />
        </Routes>
    
    </div>
  );
}

export default App;


