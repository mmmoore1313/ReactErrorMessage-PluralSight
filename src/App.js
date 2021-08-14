import React, {useState, useEffect} from 'react'
import Alert from 'react-bootstrap/Alert'
import './App.css';


function App() {
  const [value, setValue] = useState("")
  const [isValid, setIsValid] = useState(false)
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setCount(1)
    }, 3000)
    return () => clearTimeout(timeout)
  },[count])
  
  function handleSubmission(){
    if (value.length > 3 || value.length < 3){
      setIsValid(false)
    }else{
      setIsValid(true)
    }
  }
  
  function handleClose() {
    
  }
  
  return (
  <div className='App'>
    {isValid
      ? <Alert variant='success'>
          Hurray! You followed some directions.
        </Alert>
      : <Alert variant='danger'>
          Opps! Try again!
        </Alert>
    }
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
