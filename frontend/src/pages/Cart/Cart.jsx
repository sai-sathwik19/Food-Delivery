import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext';

const Cart = () => {

  const{cartItems,food_list,removeFromCart,getTotalCartAmount} = useContext(StoreContext);

  return (
    <div className='cart'>
      <div className="cart-item">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br></br>
        <hr></hr>
        {food_list.map((item,index)=>{
          if(cartItems[item._id]>0)
          {
            return (
              <>
              <div className='cart-items-title  cart-items-item'>
                <img src={item.image} alt=""></img>
                <p>{item.name}</p>
                <p>RS {item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>RS {item.price*cartItems[item._id]}</p>
                <p onClick={()=>removeFromCart(item._id)} className='cross'>x</p>
              </div>
              <hr></hr> 
              </>
            )
          }
        })}
      </div> 
      <div className='cart-bottom'>
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>RS {getTotalCartAmount()}</p>
            </div>
            <hr></hr>
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>RS {getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr></hr>
            <div className="cart-total-details">
              <b>Total</b>
              <b>RS {getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
      </div> 
    </div>
  )
}

export default Cart