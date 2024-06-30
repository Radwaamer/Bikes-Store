import React from 'react'

// components
import Search from './search/Search'
import SideBar from './sideBar/SideBar'
import Products from './products/Products'
import Pagination from './pagination/Pagination'


const Bikes = () => {
    return (
        <div className='grid grid-cols-12'>
            <div className='col-span-3'>
                <SideBar />
            </div>
            <section className='col-span-9 px-4'>
                <div className="container">
                    <Search />
                    <Products />
                    <Pagination/>
                </div>
            </section>
        </div>
    )
}

export default Bikes