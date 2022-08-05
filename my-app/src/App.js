import React, {useState} from 'react';
//  We can only use hooks inside a function based components not class based componenets
function App() {
  const [count, setcount] = useState(4)
  function decrementCount(){
    // Incorrect way of updating your state
    // setcount(count - 1)
    // Correct way of updating your state
    setcount(prevcount => prevcount - 1)
  }
  function incrementCount(){
    // Incorrect way of updating your state
    // setcount(count - 1)
    // Correct way of updating your state
    setcount(prevcount => prevcount + 1)
  }
  return (
    <> 
    <button onClick={decrementCount}>-</button>
    <span>{count}</span>
    <button onClick={incrementCount}>+</button>
    </>
  );
}

export default App;
//  React Hooks must be called in the exact same order in every component render  
// Checking working or not