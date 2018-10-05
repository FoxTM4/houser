import React, { Component } from 'react';
import './App.css';
import routes from './routes'
import {Link} from 'react-router-dom'
// import Dashboard from './components/Dashboard/Dashboard'
import Header from './components/Header/Header'
// import Wizard from './components/Wizard/Wizard'

class App extends Component {
  constructor(){
    super()
    this.state= {
     
      
    }
  }

handleSubmit(){
//component did mount
}



  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Header />
        <Link to="/wizard"><button>Add A Home</button> </Link> 
        </header>
        <Link to="/" className='links'>Dashboard</Link>
         

        {routes}
      </div>
    );
  }
}

export default App;
