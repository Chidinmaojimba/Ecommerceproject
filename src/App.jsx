import { Routes, Route } from 'react-router'
import { HomePage } from './pages/HomePage'
import { CheckoutPage } from './pages/CheckoutPage'
import { Orderspage } from './pages/OrdersPage'
import './App.css'

function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<HomePage />}/>
    <Route path="checkout" element={<CheckoutPage />}/>
    <Route path="orders" element={<Orderspage />}/>
    
     </Routes>
    </>
  )
}

export default App
