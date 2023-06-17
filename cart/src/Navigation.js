import React from 'react'
import Products from './Products'
import { Routes,Route } from 'react-router-dom'
import Cart from "./Cart"

export const Navigation = ({productItems,cartItems,handleAddProduct,handleRemoveProduct}) => {
  return (
    <div>
    
    <Routes>
    <Route path='/' element={<Products productItems={productItems} handleAddProduct={handleAddProduct}/>}/>
    <Route path='/cart' element ={<Cart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct}/>}/>
    
    </Routes>
    
   
    
    </div>
  )
}
