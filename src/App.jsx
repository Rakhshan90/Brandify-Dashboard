import "./App.css";
import Home from "./Pages/Home";
import UserList from "./Pages/UserList";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import User from "./Pages/User";
import NewUser from "./Pages/NewUser";
import ProductList from "./Pages/ProductList";
import Product from "./Pages/Product";
import NewProduct from "./Pages/NewProduct";
import Login from "./Pages/Login";
import { useSelector } from "react-redux";




function App() {

  const admin = useSelector((state) => state.user.currentUser.isAdmin)


  return (
    <Router>
      <Routes>
      <Route path="/login" element={<Login />} />
        {admin && (
          <>
            <Route exact path="/" element={<Home />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/user/:userId" element={<User />} />
            <Route path="/newUser" element={<NewUser />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/newProduct" element={<NewProduct />} />
          </>)}
      </Routes>
    </Router>
  )
}

export default App
