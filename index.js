import Calculator from '~/src/Calculator'

const a = 6
const b = 2
const calc = new Calculator()

console.log(`${a} + ${b} =`, calc.plus(a, b))
console.log(`${a} - ${b} =`, calc.minus(a, b))
console.log(`${a} * ${b} =`, calc.multiply(a, b))
console.log(`${a} / ${b} =`, calc.divide(a, b))
