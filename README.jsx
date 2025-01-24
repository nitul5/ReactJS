// using multiple useState hook to design a simple component:

import React, {useState} from 'react'; //importing useState hook..

const App = ()=>{
  const [counter, setCounter] = useState(0); //counter dynamic variable with a setCounter function
  const [name, setName] = useState(''); //name as dynamic variable with setName function

function stateChange(){
  setCounter(counter+1); 
}
  return(
    <div>
    <input type="text" onChange={e=>setName(e.target.value)}/>  
    <h1>{name} has clicked {counter} times!</h1>
    <button onClick={stateChange}>clickMe</button> 
    </div>
  )
}
export {App}; //You can use export default App; also
