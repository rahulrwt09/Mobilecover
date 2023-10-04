
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getproduct } from '../Redux/ProductReducer/action';
import { store } from '../Redux/store'; // Make sure you import your Redux store correctly
import { ProductCard } from './ProductCard';
import './productlist.css'
import { useLocation, useSearchParams } from 'react-router-dom';

export const ProductList = () => {
  const[searchparam] = useSearchParams()
  const location = useLocation()
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducer.Products);

   let obj = {
    params:{
      model:searchparam.getAll("category"),
      _sort:searchparam.get("order") && "price",
      _order:searchparam.get("order")
    },
   }
  useEffect(() => {
    dispatch(getproduct(obj));
  }, [location.search]); // The empty dependency array ensures this effect runs only once on component mount
  
  return (
    <>
    <div className='productlist'>
    {products.length>0 && products.map((el)=>{
        return <ProductCard key={el.id} product={el}/>
    })}
    </div>
    </>
  );
};
