
import './App.css';
import React,{Component} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import Newsitem from './components/Newsitem';
export default class App extends Component{
  c = 'john' ;
render() {
  return (
    

<div>
hello my world {this.c}
<Navbar/>
<News/>

</div>

    
  )
}
}

