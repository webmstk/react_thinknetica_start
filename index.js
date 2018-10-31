import React from 'react'
import ReactDOM from 'react-dom'
import HelloWorld from '~/src/HelloWorld'
import CalculatorDemo from '~/src/CalculatorDemo'

ReactDOM.render(
  <div>
    <HelloWorld />
    <CalculatorDemo a={6} b={2} />
  </div>,
  document.getElementById('root')
)
