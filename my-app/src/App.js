
import './App.css';
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
  </div>
  <div className="container my-3">
    
  </div>
    </>

  );
}

export default App;
