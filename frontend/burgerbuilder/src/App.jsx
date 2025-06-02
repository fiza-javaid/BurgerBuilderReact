//App.jsx
import { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { setMyOrder, setRecentOrder } from './redux/order/orderSlice'

function App() {
  const recentOrder = useSelector((state) => state.order.setRecentOrder)
  const myOrder = useSelector((state) => state.order.setMyOrder)
  const dispatch = useDispatch()

  return (
    <>
      <h1>Starting Burger builder!</h1>
    </>
  )
}

export default App
