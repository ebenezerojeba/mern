import React, { useEffect, useState } from "react";
import "./PlaceOrder.css";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { LGAs } from "../../data/lgas";
import { PaystackButton } from "react-paystack";

const PlaceOrder = () => {
  const { getTotalCartAmount, token, food_list, cartItems, url, formatAmount } = useContext(StoreContext);
  const navigate = useNavigate();

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    phone: "",
    lga: "",
    price: 0,
  });

  const oncChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    if (name === 'lga') {
      const selectedLGA = LGAs.find(lga => lga.name === value);
      setData({
        ...data,
        lga: value,
        price: selectedLGA ? selectedLGA.price : 0,
      });
    } else {
      setData(data => ({ ...data, [name]: value }));
    }
  };

  const formatNaira = (number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(number);
    };

    const placeOrder = async (event) => {
      event.preventDefault();
      let orderItems = [];
      food_list.forEach((item) => {
        if (cartItems[item._id] > 0) {
          let itemInfo = item;
          itemInfo["quantity"] = cartItems[item._id];
          orderItems.push(itemInfo);
        }
      });
    
      const orderData = {
        userId: token.userId,
        items: orderItems,
        amount: getTotalCartAmount() + data.price,
        address: data,
        email: data.email
      };
    
      console.log(orderData); // Debugging: Ensure amount is correct
    
      const response = await axios.post(url + "/api/order/place", orderData, {
        headers: { token },
      });
    
      if (response.data.success) {
        window.location.replace(response.data.session_url);
      }
    };
    

  const componentProps = {
    email: data.email,
    lga: data.lga,
    amount: getTotalCartAmount() + data.price,
    metadata: {
      name: `${data.firstName} ${data.lastName}`,
      phone: data.phone,
    },
    publicKey: "pk_live_dc10515840493aa59e6a9b5040654a1f3bdad258",
    text: "Pay Now",
    onSuccess: async (response) => {
      await axios.post(url + "/api/order/verify", { orderId: newOrderData._id, reference: response.reference });
      navigate(`/verify?success=true&orderId=${newOrderData._id}`);
    },
    onClose: () => {
      console.log("Payment closed");
    },
  };
  

  useEffect(()=>{
    if(!token) {
      alert("Please sign up or login to your account")
    }
    else if (getTotalCartAmount() === 0)
    {
      navigate('/')
    }
  },[token])

  return (
    <form onSubmit={placeOrder} className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input required name="firstName" onChange={oncChangeHandler} value={data.firstName} type="text" placeholder="First name" />
          <input required name="lastName" onChange={oncChangeHandler} value={data.lastName} type="text" placeholder="Last name" />
        </div>
        <input name="email" type="email" onChange={oncChangeHandler} value={data.email} placeholder="Email Address" />
        <input required name="address" value={data.address} onChange={oncChangeHandler} type="text" placeholder="Address" />
        <input type="tel" name="phone" placeholder="Phone" id="phone" onChange={oncChangeHandler} value={data.phone} />
        <div className="multi-fields">
          <select
            name="lga"
            type="option"
            placeholder="delivery"
            value={data.lga}
            onChange={oncChangeHandler}
            required
          >
            <option required>Delivery</option>
            {LGAs.map((lga) => (
              <option key={lga.name} value={lga.name}>
                {lga.name} - ₦{lga.price}
              </option>
            ))}
          </select>
          {data.lga && (
            <div required>
              <p></p>
            </div>
          )}
        </div>
      </div>
  
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{formatNaira(getTotalCartAmount())}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery</p>
              <p>{getTotalCartAmount() === 0 ? formatNaira(0) : formatNaira(data.price)}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>
                {getTotalCartAmount() === 0 ? 0 : formatNaira(getTotalCartAmount() + data.price)}
              </b>
            </div>
          </div>
          {/* <button type="submit" onClick={navigate("/order")}>Proceed to payment</button> */}
          <PaystackButton {...componentProps}/>
          
        </div>
      </div>
    </form>
  );
}  

export default PlaceOrder;