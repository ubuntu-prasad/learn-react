import React from 'react'
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
      {/* <Navbar />
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