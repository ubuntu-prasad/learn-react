import React from 'react'

import './App.css'

import Demo from './components/Demo'
import FunDemo from './components/FunDemo'
//import Todo from './components/Todo'
import ContactCard from './components/ContactCard'
import JokeDemo from './components/JokeDemo'

import { 
  BrowserRouter, 
  Browser, 
  Route, 
  Switch
} from 'react-router-dom'

import './App.css'

// Pages
// import MyInfo from './pages/MyInfo'
// import Demo from './pages/Demo'
import Todo from './pages/Todo' 
// Components
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">

      {/*
          //<Demo />
	    // <FunDemo />
	     // <Todo />
        
        //<ContactCard />
        
      //<JokeDemo />
    <Navbar />
      <header className="App-header">
        <label>First Name: </label><input />
      </header>
      <h1></h1>
      <main>
        <Demo />
        <MyInfo />
      </main> */}
      <Todo />
    </div>
  );
}

export default App;
