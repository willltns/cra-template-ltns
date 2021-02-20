import './index.css'
import logo from '../../assets/img/logo.svg'

import { Observer } from 'mobx-react'
import { Link } from 'react-router-dom'

import { useStore } from '../../utils/hooks/useStore'

function Counter() {
  const { counter } = useStore()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <button onClick={counter.increase}>increase</button>
        <Observer
          render={() => (
            <div>
              <p>count: {counter.count}</p>
              <p>squareOfCount: {counter.squareOfCount}</p>
            </div>
          )}
        />

        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>

        <Link to="/about">To About</Link>
      </header>
    </div>
  )
}

export default Counter
