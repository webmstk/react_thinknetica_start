import React from 'react'
import PropTypes from 'prop-types'
import Calculator from '~/src/Calculator'

const calc = new Calculator()

const CalculatorDemo = ({ a, b }) => {
  return (
    <div>
      <p>{a} + {b} = {calc.plus(a, b)}</p>
      <p>{a} - {b} = {calc.minus(a, b)}</p>
      <p>{a} * {b} = {calc.multiply(a, b)}</p>
      <p>{a} / {b} = {calc.divide(a, b)}</p>
    </div>
  )
}

CalculatorDemo.propTypes = {
  a: PropTypes.number.isRequired,
  b: PropTypes.number.isRequired,
}

export default CalculatorDemo
