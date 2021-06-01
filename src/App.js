import logo from './logo.svg';
import './App.css';
import styles from './module.css';
import React, {useState} from 'react'

function App() {
  const [value, setValue] = useState(0);
  const [amount, setAmount] = useState(2);

  function incrementByAmount() {
    setValue(value+amount);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className={styles.row}>
          <button className={styles.button}
            arial-label="Increment value"
            onClick={()=>setValue(value+1)}
          >
            +
          </button>

          <span>{value}</span>
          <button className={styles.button}
            arial-label="Decrement value"
            onClick={()=>setValue(value-1)}
          >
            -
          </button>
        </div>
        <div>

          <input 
          value={amount}
          onChange={(e)=>{setAmount(Number(e.target.value))}}
          />
          <button className={styles.button}
            arial-label="Add amount"
            onClick={()=>{setValue(value+amount)}}
          >
            Add amount
          </button>
          <button className={styles.button}
            arial-label="Add Async"
            onClick={()=>{setTimeout(() => {
              incrementByAmount(Number(amount));
            }, 1000);}}
          >
            Add Async
          </button>
        </div>

      </header>
    </div>
  );
}

export default App;
