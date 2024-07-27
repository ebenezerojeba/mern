import React, { useContext, useEffect } from 'react';
import './Verify.css';


import axios from 'axios';

import { useNavigate, useSearchParams } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import { toast } from 'react-toastify';

const Verify = () => {
  const [searchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");
  const reference = searchParams.get("reference");
  const { url } = useContext(StoreContext);
  const navigate = useNavigate();

  const verifyPayment = async () => {
    try {
      const response = await axios.post(`${url}/api/order/verify`, { orderId, reference });
      if (response.data.success) {
        toast.success("Order Placed successfully")
        navigate("/myorders");
      } else {
        toast.error("Error")
        navigate("/");
      }
    } catch (error) {
      console.error('Error verifying payment:', error);
      toast.error("Error")
      navigate("/error"); // Redirect to an error page or handle differently
    }
  };

  useEffect(() => {
    if (success && orderId && reference) {
      verifyPayment();
    } else {
      navigate("/"); // Redirect if any parameter is missing
    }
  }, [success, orderId, reference]);

  return (
    <div class="spinner">
  <div class="bounce1"></div>
  <div class="bounce2"></div>
  <div class="bounce3"></div>
</div>
  );
};

export default Verify;
