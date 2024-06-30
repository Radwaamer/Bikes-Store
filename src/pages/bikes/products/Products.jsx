import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// actions
import { fetchBikes } from 'store/bikes/act/actGetBikes';

// components
import ProductCard from 'components/ODD/ProductCard'

const Products = () => {

    const dispatch=useDispatch();
    useEffect(() => {dispatch(fetchBikes())},[dispatch]);
    
    const {bikes}=useSelector(state=>state.bikes);
    const {current,productsPerPage}=useSelector(state=>state.pagination);

    return (
        <div className='mt-12 grid grid-cols-3 gap-8'>
            {bikes && bikes.slice((current-1)*productsPerPage,current*productsPerPage).map(bike=><ProductCard key={bike.id} product={bike}/>)}
        </div>
    )
}

export default Products