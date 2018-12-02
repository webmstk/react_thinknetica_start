import { createContext } from 'react'

const BasketContext = createContext({
  basket: {},
  addToBasket: () => console.log('addToBasket not implemented'),
})

export const BasketProvider = BasketContext.Provider
export const BasketConsumer = BasketContext.Consumer
