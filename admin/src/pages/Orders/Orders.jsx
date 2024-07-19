import React from 'react'
import './Orders.css'
import { useState } from 'react';
import {toast} from "react-toastify"
import { useEffect } from 'react';
import axios from "axios";
import { assets } from '../../../../frontend/src/assets/assets';

const Orders = ({url}) => {

  const [orders,setOrders] = useState([]);
  const fetchAllOrders = async () => {
 const response = await axios.get(url+"/api/order/list");
 if(response.data.success) {
  setOrders(response.data.data);
  console.log(response.data.data);
 }
 else{
  toast.error("Error")
 }
  }

  const statusHandler = async (event,orderId) => {
    const response = await axios.post(url+"/api/order/status",{
      orderId,
      status:event.target.value,
      orderStatus:event.target.value,
    })
    if(response.data.success){
      await fetchAllOrders();
    }
  }

  const formatNaira = (number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(number);
    };


  useEffect(()=>{
    fetchAllOrders();
  })
  return (
    <div className='order add'>
      <h3>Order Page</h3>
      <div className="order-list">
        {orders.map((order,index)=>(
          <div key={index} className='order-item'>
            <img src={assets.parcel_icon} alt="" />
            <div>
              <p className='order-item-food'>
                {order.items.map((item,index)=>{
                  if (index === order.items.length-1) {
                    return item.name + " x " + item.quantity
                  }
                  else{
                    return item.name + " x " + item.quantity + ", "
                  }
                })}
              </p>
              <p className="order-item-name">{order.address.firstName+ " "+order.address.lastName}</p>
              <div className="order-item-address">
                <p>{order.address.address+", "}</p>
                <p>{order.address.lga}</p>
              </div>
              <p className='order-item-phone'>{order.address.phone}</p>
              </div>
              <p className='order-item-item'>Items: {order.items.length}</p>
              <p className='order-item-price'>{formatNaira(order.amount)}</p>
              <select onChange={(event)=>statusHandler(event,order._id)} value={order.orderStatus} id="">
                <option value="Food Processing">Food Processing</option>
                <option value="Out for delivery">Out fot delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Orders