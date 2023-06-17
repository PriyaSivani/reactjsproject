import React from 'react'
import "./Cart.css"
const Cart = ({cartItems,handleAddProduct,handleRemoveProduct}) => {
  return (
    <>
    <center>
    <h2>You have ordered:</h2>
    </center>
    <div className='cart-items'>
    <div className="cart-items-header"></div>
    {cartItems.length ===0 && (<div className="cart-items-empty">No Items are added</div>)}

    <div>
    {cartItems.map((item)=>(
        <div key={item.id} className="cart-items-list"> 
        <img className='cart-items-image' src={item.image} alt={item.title}/>
        <center>
        <div className="cart-items-name">{item.title}</div>
        <div  className="cart-items-brand">{item.brand} {item.description}</div>
        <div className="items-price-cart">Price: Rs.{item.price}</div>
        </center>
        <div className="cart-items-function"></div>
        <button   className="btn btn-danger" onClick={()=>handleRemoveProduct(item)}>Remove</button>
        </div>
    ))}
    </div>
    
    </div>
    </>
  )
}

export default Cart