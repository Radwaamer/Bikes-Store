import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

// actions
import { cartHandeler } from 'store/cart/cartSlice';

const ProductCard = ({product}) => {

    const dispatch= useDispatch();

    return (
        <div className='rounded-md shadow-sm shadow-white-color h-full cursor-pointer hover:scale-105'>
            <img className='w-full rounded-md rounded-b-none' src={product["small image"]} alt={product.name} />
            <div className='grid gap-2 p-4'>
                <h3 className='font-bold text-lg text-blue'>{product.name}</h3>
                <p className='flex justify-between text-sm'>
                    <span>{product["Engine Capacity"]}</span> <span className='text-blue'>|</span>
                    <span>{product["Mileage"]}</span> <span className='text-blue'>|</span>
                    <span>{product["Body Type"]}</span>
                </p>
                <p>
                    <span className='text-blue text-sm'>Price</span>
                    <p className='flex gap-2'>
                        <p>{product.price.start} ~ {product.price.end}</p>
                    </p>
                </p>
                <div className='flex justify-around border-t pt-3 mt-4'>
                    <button onClick={()=>dispatch(cartHandeler(product))} 
                    className='font-semibold text-blue hover:text-white-color'>Compare</button>
                    <span>|</span>
                    <Link to={`${product.id}`} className='font-semibold text-blue hover:text-white-color'>Overview</Link>
                </div>
            </div>
        </div>
    )
}

export default ProductCard