import React from 'react'
import "./Products.css"
const Products = ({productItems,handleAddProduct}) => {
    
  return (
     <>
     <center>
    <h1>Our Items</h1>
    </center>
    <div className='products'>
   
    {productItems.map((productItem)=>(
        <div className='card'>
        <div>
        <img className='product-image' src={productItem.image} alt={productItem.title}/>
        
        </div>
        <div><h3 className='product-title'>{productItem.title}</h3></div>
        <div className='product-brand'>{productItem.brand}</div>
        <div className='product-description'>{productItem.description}</div>
        <div className='product-price'> Price: Rs.{productItem.price} <del className='normal' >{productItem.oldPrice}</del></div>
        <div className='center'> <button type="button" className="btn btn-primary" onClick={()=> handleAddProduct(productItem)}>ADD TO CART</button></div>
        </div>

  ))}
    </div>
    </>
   
  )
}

export default Products