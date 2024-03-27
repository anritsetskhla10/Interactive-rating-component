
import { useState } from 'react';
import './App.css';

import MainCard from './components/mainCard/MainCard'

import Thanks from "./components/thanks/Thanks"


function App() {

  const [change, setChange] = useState('false')
  const [targetValue, setTargetValue] = useState(0);

  return (
    <>
      
      {change === 'false' ? (
        <MainCard 
        change = {change} 
        setChange ={setChange} 
        targetValue={targetValue} 
        setTargetValue={setTargetValue}
        />
      ) : (
        <Thanks 
          targetValue={targetValue}  
        />
      )}
   
    </>
  )
}

export default App
