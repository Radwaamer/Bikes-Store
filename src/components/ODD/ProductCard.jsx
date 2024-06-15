import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = () => {
    return (
        <div className='rounded-md shadow-sm shadow-white-color h-full cursor-pointer hover:scale-105'>
            <img className='w-full rounded-md rounded-b-none' src="https://radwaamer.sirv.com/bikes/bike1/1-5.webp" alt="" />
            <div className='grid gap-2 p-4'>
                <h3 className='font-bold text-lg text-blue'>Hero XPulse 200 4V</h3>
                <p className='flex justify-between text-sm'>
                    <span>199.6 CC</span> <span className='text-blue'>|</span>
                    <span>40 KM/L</span> <span className='text-blue'>|</span>
                    <span>Off Road</span>
                </p>
                <p>
                    <span className='text-blue text-sm'>Price</span>
                    <p className='flex gap-2'>
                        <p>₹ 1.44 ~ ₹ 1.51</p>
                    </p>
                </p>
                <div className='flex justify-around border-t pt-3 mt-4'>
                    <button className='font-semibold text-blue hover:text-white-color'>Compare</button>
                    <span>|</span>
                    <Link to={"1"} className='font-semibold text-blue hover:text-white-color'>Overview</Link>
                </div>
            </div>
        </div>
    )
}

export default ProductCard