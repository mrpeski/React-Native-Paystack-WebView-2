import React, { useEffect } from 'react'
import RNPaystackWebview2Module, { Counter } from 'react-native-paystack-webview-2'

const App = () => {
  useEffect(() => {
    console.log(RNPaystackWebview2Module)
  })

  return <Counter />
}

export default App
