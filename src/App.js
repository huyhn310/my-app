import logo from './logo.svg';
import './App.css';
import styles from './module.css';
import React, {useState} from 'react'
import ValueComponent from './screens/ValueComponent'

function App() {
  const [value, setValue] = useState(0);
  const [amount, setAmount] = useState(2);

  
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ValueComponent ></ValueComponent>

      </header>
    </div>
  );
}

export default App;
