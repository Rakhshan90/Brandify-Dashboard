import styled from "styled-components";
import "./App.css";
import Sidebar from "./Components/Sidebar"
// import Topbar from "./Components/Topbar"
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
import Topbar from "./Components/Topbar";


const Container = styled.div`
display: flex;
margin-top: 10px;
`;



function App() {

  const admin = useSelector((state) => state.user.currentUser.isAdmin)


  return (

    <Router>

      {admin ? (
        <>
          <Topbar />
          <Container>
            <Sidebar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/users" element={<UserList />} />
              <Route path="/user/:userId" element={<User />} />
              <Route path="/newUser" element={<NewUser />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/product/:productId" element={<Product />} />
              <Route path="/newProduct" element={<NewProduct />} />
            </Routes>
          </Container>
        </>) : <Route path="/login" element={<Login />} />}
    </Router>

    // <Router>

    //     <Topbar />
    //     <Container>
    //       <Sidebar />
    //       <Routes>
    //         <Route exact path="/" element={<Home />} />
    //         <Route path="/users" element={<UserList />} />
    //         <Route path="/user/:userId" element={<User />} />
    //         <Route path="/newUser" element={<NewUser />} />
    //         <Route path="/products" element={<ProductList />} />
    //         <Route path="/product/:productId" element={<Product />} />
    //         <Route path="/newProduct" element={<NewProduct />} />
    //         {/* <Route path="/login" element={admin? <Navigate to="/" /> : <Login/>} /> */}
    //         <Route path="/login" element={<Login />} />
    //       </Routes>
    //     </Container>
    // </Router>
  )
}

export default App
