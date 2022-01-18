import { BrowserRouter, Routes, Route } from "react-router-dom"
// import { useSelector } from "react-redux"
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import ShoppingPage from "./pages/ShoppingPage"
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'
import SuccessPage from "./pages/SuccessPage"

function App() {
  // const user = useSelector(state => state.user.currentUser)
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/" element={<HomePage/>} />
          <Route path="/products/:category" element={<ShoppingPage/>} />
          <Route path="/product/:id" element={<ProductPage/>} />
          <Route path="/cart" element={<CartPage/>} />
          <Route path="/success" element={<SuccessPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;