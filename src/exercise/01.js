// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

const countReducer = (state, newState) => newState

function Counter({initialCount = 0, step = 1}) {
/*Extra credit 2
Change the code as stated below and edit the countReducer in a way that
the counter continue working as supposed to:
 const [state, setState] = React.useReducer(countReducer, {
  count: initialCount,
})
 const {count} = state
 const increment = () => setState({count: count + step})
* */

  const [state, setState] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const {count} = state
  const increment = () => setState({count: count + step})

  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
