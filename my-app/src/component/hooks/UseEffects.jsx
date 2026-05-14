import React from 'react'
import React {Usestate}
export default function UseEffects() {
    
const [count,setCount]= useState(0);
const increment=()=>{
    setCount(count+1);
}
const decrement=()=>{
    setCount(count-1);
}
const reset=()=>{
    setCount(0);
}
    
  return (
    <>
    <div>
      <div>usestate</div>
    

    </div>
    <div>
        <h2>{count}</h2>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>reset</button>

    </div>
    </>
  )
}
