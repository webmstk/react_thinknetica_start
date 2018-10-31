import React from 'react'
import ReactDOM from 'react-dom'
import HelloWorld from '~/src/HelloWorld'
import CalculatorDemo from '~/src/CalculatorDemo'
import ReceiptDemo from '~/src/ReceiptDemo'
import positions from '~/src/data/positions'

ReactDOM.render(
  <div>
    <HelloWorld />
    <CalculatorDemo a={6} b={2} />
    <ReceiptDemo positions={positions} />
  </div>,
  document.getElementById('root')
)
