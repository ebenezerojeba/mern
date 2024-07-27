import React, { useContext, useEffect, useState } from 'react';
import './MyOrders.css';
import { StoreContext } from '../../context/StoreContext';
import { assets } from '../../assets/assets';
import axios from 'axios';

const MyOrders = () => {
  const { url, token, userId } = useContext(StoreContext);
  const [data, setData] = useState([]);

  const fetchOrders = async () => {
    try {
      const response = await axios.post(url + "/api/order/userorders", { userId }, {
        headers: { token }
      });
      if (response.data.success) {
        setData(response.data.data);
      } else {
        console.error("Error fetching orders");
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  const formatNaira = (number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(number);
  };

  return (
    <div className='my-orders'>
      <h2>My Orders</h2>
      <div className="container">
        {data.map((order, index) => (
          <div key={index} className='my-orders-order'>
            <img src={assets.parcel_icon} alt="" />
            <p>{order.items.map((item, index) => {
                if(index === order.items.lenght-1){
                    return item.name+" x "+item.quantity
                }
                else{
                    return item.name+ " x "+item.quantity+ ", "
                }
            })}</p>
            <p>{formatNaira(order.amount)}</p>
            <p>Items: {order.items.length}</p>
            <p><span>&#x25cf;</span><b>{order.orderStatus}</b></p>
            <button onClick={fetchOrders}>Track Orders</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
