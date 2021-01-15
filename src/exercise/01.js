// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

const countReducer = (state, step) => state + step

function Counter({initialCount = 0, step = 1}) {
/*Extra credit 1
Change the code as stated below and edit the countReducer in a way that
the counter continue working as supposed to:
* const [count, changeCount] = React.useReducer(countReducer, initialCount)
* const increment = () => changeCount(step)
* */

  const [count, changeCount] = React.useReducer(countReducer, initialCount)

  const increment = () => changeCount(step)
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
