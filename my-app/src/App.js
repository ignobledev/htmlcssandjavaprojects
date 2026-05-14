

import React from 'react';
import './App.css';
import UseEffects from './component/hooks/UseEffects';
import Demo from './component/Demo';
import Props from './component/Props';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/Navbar';
import About from './component/About';

//import Textform from'./component/Textform';

function App() {
  
  return (
<>
 
<Navbar title="Textutils"  name="satyam"/>

  <div className="container my-3">
 {/* <Textform heading="enter to analyze"/>*/}
 <About />
 <Demo />
 <Props name="Satyam" rollno="394875" course="btech" />
  </div>
  <div className="container my-3">
   
  </div>
<UseEffects/>
    </>

  );
}

export default App;
