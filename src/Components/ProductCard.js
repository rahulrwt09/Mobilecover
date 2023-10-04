import React from 'react'
import { productFailure } from '../Redux/ProductReducer/action'

export const ProductCard = ({product}) => {
  return (
    <div>
      <img src={product.image}/>
      <p>{`Model ${product.title}`}</p>
      <p>{`Price ${product.price}`}</p>
    </div>
  )
}
