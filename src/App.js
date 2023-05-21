
import { useState } from 'react';
import './App.css';
import Add from './components/Add/Add';

function App() {

  const[value1,setvalue1]=useState(0);
  const inputvalue=() =>{
    return value1;
  }
  const[value2,setvalue2]=useState(0);
  const inputvalue2 =() =>{
    return value2;
  }

  return (
  <div>
    <h4>Addition Of Two Numbers</h4>
    <input 
    value={value1}
    onChange={(m)=>{
      setvalue1(m.target.value)
      console.log('value1 = ', value1)
    }}
     type='number' placeholder='enter value' /><br></br><br></br>
    
    <input 
    value={value2}
    onChange={(f)=>{
      setvalue2(f.target.value)
      console.log('inputvalue2',value2)
    }}
    type='number' placeholder='enter value' /><br></br><br></br>

    <Add a={value1} b={value2}></Add>

    <button>Enter</button>
  </div>

    

  );
}

export default App;
