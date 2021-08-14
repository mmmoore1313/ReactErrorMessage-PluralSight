import React, {useState} from 'react'
import Alert from 'react-bootstrap/Alert'
import './App.css';


function App() {
  const [value, setValue] = useState("")
  const [isValid, setIsValid] = useState(false)
  
  function handleSubmission(){}
  
  return (
  <div className='App'>
    <div>
      <h1>Word Master</h1>
      <p>Enter A Three Letter Word</p>
      <input type='text' onChange={(e) => setValue(e.target.value)} value={value} />
      <button onClick={handleSubmission}>
        Submit
      </button>
    </div>
  </div>
  );
}

export default App;
