import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <AppChild name={"Harsha"}/>
      <AppChild name={"Vardhan"}/>
    </div>
  );
}

function AppChild(props) {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React from {props.name}
        </a>
      </header>
    </div>
  )
}




export default App;
