import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import Header from '../components/common/header/Header'

// actions
import { setCart } from 'store/cart/cartSlice'

const MainLayout = () => {

    const dispatch=useDispatch();

    useEffect(()=>{
        if(localStorage.getItem("cart")){
            dispatch(setCart(JSON.parse(localStorage.getItem("cart"))));
        }
    },[dispatch]);

    return (
        <>
        <Header />
        <Outlet />
        </>
    )
}

export default MainLayout