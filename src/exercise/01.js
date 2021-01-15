// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

const countReducer = (state, newState) => typeof newState === 'function' ? newState(state) : newState

function Counter({initialCount = 0, step = 1}) {
/*Extra credit 2
See if you can figure out how to make your reducer support both the
object as in the last extra credit as well as a function callback:
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
  const increment = () =>
    setState(currentState => ({count: currentState.count + step}))

  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
