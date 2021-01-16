// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

/*const countReducer = (state, newState) => typeof newState === 'function' ? newState(state) : newState*/


const countReducer = (state, newState) => {
  const { type, step } = newState
  switch(type) {
    case 'INCREMENT':
      return {...state, count: state.count + step}
    default:
      return state
  }
}

function Counter({initialCount = 0, step = 1}) {
/*Extra credit 2
See if you can figure out how to make your reducer support both the
object as in the last extra credit as well as a function callback:
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const {count} = state
  const increment = () => dispatch({type: 'INCREMENT', step})
* */

  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const {count} = state
  /*console.log('count', count)*/
  const increment = () => dispatch({type: 'INCREMENT', step})

  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
