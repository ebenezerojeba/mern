import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import LoginPopup from "./components/LoginPopup/LoginPopup";
// import Event from "./components/Event/Event";
// import Form from "./components/Form/Form";
import Verify from "./pages/Verify/Verify";
import MyOrders from "./pages/MyOrders/MyOrders";
import EventPlan from "./pages/EventPlan/EventPlan";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <Navbar setShowLogin={setShowLogin} />
      <div className="app">
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/event" element={<EventPlan />} />
          <Route path="/verify" element={<Verify/>} />
          <Route path="/myorders" element={<MyOrders/>} />
        </Routes>
        <ToastContainer/>
      </div>
      <Footer />
    </>
  );
};

export default App;
