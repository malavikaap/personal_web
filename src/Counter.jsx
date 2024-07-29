//counter
import React , {useState} from 'react'
function Counter() {
  const [count,setCount] = useState(0)//counter default value is 0
  const increment = () => {
    setCount(count+1)//setCount(c => c + 1) this is updater function,setcount can be update like this.safe update based on previpous value
  }
  const decrement = () => {
    setCount(count-1)
  }
  const reset = () => {
    setCount(0)
  }
    return(
      <div className="counter-container">
        <p className="counter-display">Counter:{count}</p>
        <button className="counter-buttton" onClick={decrement}>Decrement</button>
        <button className="counter-buttton" onClick={increment}>Increment</button>
        <button className="counter-buttton" onClick={reset}>Reset</button>
      </div>
    )
}
export default Counter
