import React from 'react';
import Home from './Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Education from './Education';
import Aboutme from './Aboutme';
import Project from './Project';
import Navbar from './Navbar';
import PlusTwo from './PlusTwo';
import Graduation from './Graduation';
import Tenth from './Tenth';
function App() {
  return(
    <>
     <Router>
       <div className='App'>
             <Navbar />
                 <Routes>
                 <Route path="/aboutme" element={<Aboutme />} />
                 <Route path="/project" element={<Project />} />
                 <Route path="/education" element={<Education />} />
                 <Route path="/graduation" element={<Graduation />} />
                 <Route path="/plustwo" element={<PlusTwo />} />
                 <Route path="/gototenth" element={<Tenth />} />
                 <Route path="/" element={<Home />} />
                 </Routes>
         </div>
     </Router>
    </>
  )
}
export default App








