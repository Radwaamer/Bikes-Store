import React from 'react'
import { useDispatch } from 'react-redux'

// actions
import { cartHandeler } from 'store/cart/cartSlice';

const Landing = ({info}) => {

    const dispatch=useDispatch();

    return (
        <div className='h-[45vh] relative'>
            <img className='w-full h-full' src={info["cover image"]} alt={info.name} />
            <div className='absolute bottom-0 left-0 w-full'>
                <div className="container">
                    <h1 className='text-4xl mb-3 font-bold'>{info.name}</h1>
                    <p className='text-2xl font-semibold text-blue'>{info.price.start} - {info.price.end}</p>
                    <button onClick={()=>dispatch(cartHandeler(info))} 
                    className='py-2 px-6 mt-5 rounded-3xl bg-blue text-black-color 
                    font-bold hover:bg-white-color transition-all'>Compare</button>
                </div>
            </div>
        </div>
    )
}

export default Landing